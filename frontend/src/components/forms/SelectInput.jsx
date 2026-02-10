import './css/select-input.css';

export default function SelectInput({ label, name, options=[], multiple = false, ...props }) {
    return (
        <div className="field">
            {label && (
                <label className="label" htmlFor={name}>
                    {label}
                </label>
            )}
            <div className="control">
                <div className={`select ${multiple ? 'is-multiple' : ''} is-fullwidth`}>
                    <select
                        id={name}
                        name={name}
                        multiple={multiple}
                        className="select-input"
                        {...props}
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}