import { supabase } from "../services/supabase.js"

export const getUsers = async (req, res) => {
    const { data, error } = await supabase
        .from('users')
        .select('id, name, username, role_id')
        .order('id', { ascending: true });

    if (error) {
        console.log('GET USERS ERROR:', error);
        return res.status(500).json({ error: error.message });
    }

    return res.satus(200).json(data);
}