import { supabase } from '../services/supabase.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) => {
    const { password, name, username, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // INSERT USER
    const { data: user, error: userError } = await supabase
        .from('users')
        .insert([
            {
                password, hashedPassword,     // your table uses "password"
                name,
                username,
                role_id: role  // your table uses "role_id"
            }
        ])
        .select()
        .single();

    if (userError) {
        console.log("USER INSERT ERROR:", userError);
        return res.status(500).json({ error: userError.message });
    }

    // CREATE CREATOR IF ADMIN
    if (role === 1) {  // 1 = admin
        const { error: creatorError } = await supabase
            .from('creators')
            .insert([
                {
                    user_id: user.id,
                    name: name
                }
            ]);

        if (creatorError) {
            console.log("CREATOR INSERT ERROR:", creatorError);
            return res.status(500).json({ error: creatorError.message });
        }
    }

    return res.status(201).json({ message: 'User created', user });
};
