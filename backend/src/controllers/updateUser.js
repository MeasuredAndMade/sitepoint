import { supabase } from "../services/supabase.js";

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, username, role } = req.body;

    // Fetch the existing user
    const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('id, role_id')
        .eq('id', userId)
        .single();
    
    if (fetchError) {
        console.log("FETCH USER ERROR:" , fetchError);
        return res.status(500).json({ error: fetchError.message });
    }

    // Update User
    const { data: updateUser, error: updateError } = await supabase
        .from('users')
        .update({
            name,
            username,
            role_id: role
        })
        .eq('id', userId)
        .select()
        .single();

    if (updateError) {
        console.log('UPDATE USER ERROR:', updateError);
        return res.status(500).json({ error: updateError.message });
    }

    // If role changed from user -> admin, create creator record
    const becameAdmin = existingUser.role_id !== 1 && role === 1;

    if (becameAdmin) {
        const { error: creatorError } = await supabase
            .from('creators')
            .insert([
                {
                    user_id: userId,
                    name: name
                }
            ]);
        
        if (creatorError) {
            console.log("CREATOR INSERT ERROR: ", creatorError);
            return res.status(500).json({ error: creatorError.message });
        }
    }

    const demoted = existingUser.role_id === 1 && role !== 1;

    if (demoted) {
        const { error: deleteError } = await supabase
            .from('creators')
            .delete()
            .eq('user_id', userId);

        if (deleteError) {
            console.log('CREATE DELETE ERROR: ', deleteError);
            return res.status(500).json({ error: deleteError.message });
        }
    }

    return res.status(200).json({
        message: 'User updated succesfully',
        user: updateUser
    });
};