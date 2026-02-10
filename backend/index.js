import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './src/routes/userRoutes.js';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Backend is running' });
});

app.use('/api', userRoutes);

// Double check this but then remove before production
app.get('/test-supabase', async (req, res) => {
    const { data, error } = await supabase.rpc('now');

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));