import './css/button.css';

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  ...props
}) {
  const colorClass = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    danger: 'btn-danger',
    success: 'btn-success',
    info: 'btn-info',
    warning: 'btn-warning'
  }[variant];

  return (
    <button
      className={`button ${colorClass} ${fullWidth ? 'is-fullwidth' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
