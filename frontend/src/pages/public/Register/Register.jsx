import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../../components/layout/PageWrapper.jsx'
import TextInput from '../../../components/forms/TextInput.jsx'
import Button from '../../../components/forms/Button.jsx'
import { useForm } from '../../../hooks/useForm.js'
import './register.css'

export default function CreateUser() {
    const { values, handleChange, setValues } = useForm({
        username: '',
        password: '',
        name: '', 
        role: 2,
    });
    const navigate = useNavigate();

    const API_Url = import.meta.env.VITE_API_URL

    console.log(API_Url)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${API_Url}/create-user`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(values)
            })

            if (!response.ok) {
                const error = await response.json()
                console.error("Error Creating User: ", error)
                alert(error.message || "Failed to create user");
                return
            }

            // Success
            navigate('/');

            // Reset form
            setValues({
                username: '',
                password: '',
                name:     '',
                role:     2
            })

            
        } catch (error) {
            console.error("Network Error: ", error)
            alert('Network error - check console');
        }
    }

    return (
        <PageWrapper>
            <div className='sp-create-user'>
                <h1 className='title sp-create-user-title'>Create User</h1>

                <form className='sp-create-user-form' onSubmit={handleSubmit}>
                    <TextInput 
                        label='Username'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        placeholder='Enter username'
                    />
                    <TextInput 
                        label='Password'
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                        placeholder='Enter password'
                    />
                    <TextInput 
                        label='Full Name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        placeholder='Enter full name'
                    />
                    <Button type='submit' variant='primary' fullWidth>Create User</Button>
                </form>
            </div>
        </PageWrapper>
    )
}