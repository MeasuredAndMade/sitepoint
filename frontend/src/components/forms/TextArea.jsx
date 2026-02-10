import { useState, useEffect, useRef } from "react";
import "./css/text-area.css";

export default function TextArea({
  label,
  name,
  maxLength = 300,
  value,
  onChange,
  ...props
}) {
  const [count, setCount] = useState(value?.length || 0);
  const ref = useRef(null);

  // Auto-resize logic
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [value]);

  // Character count logic
  const handleChange = (e) => {
    setCount(e.target.value.length);
    onChange(e);
  };

  return (
    <div className="field">
      {label && <label className="label">{label}</label>}

      <div className="control">
        <textarea
          ref={ref}
          id={name}
          name={name}
          className="textarea sp-textarea"
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>

      <p className="help sp-char-count">
        {count}/{maxLength}
      </p>
    </div>
  );
}
