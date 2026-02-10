// Centralized API base:
const API = import.meta.env.VITE_API_URL;

export async function apiRequest(path, options = {}) {
    const res = await fetch(`${API}${path}`, {
        headers: { 'Content-Type': 'application/json' }, 
        ...options
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
}