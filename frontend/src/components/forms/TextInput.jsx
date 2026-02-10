import './css/text-input.css'

export default function TextInput ({ label, name, type = 'text', ...props}) {
    return (
        <div className="field">
            {label && (
                <label className="label" htmlFor={name}>
                    {label}
                </label>
            )}
            <div className="control">
                <input 
                    id={name}
                    name={name}
                    type={type}
                    className="input text-input has-background-grey-lighter"
                    {...props}
                />
            </div>
        </div>
    )
}