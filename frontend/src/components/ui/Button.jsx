import { Link } from "react-router-dom";

function Button({
  children,
  onClick = () => {},
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  href = null,
  target = null
}) {
  const baseStyles = "px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 transform focus:outline-none focus:ring-2";
  const variantStyles = {
    primary: "text-primary bg-bg-light hover:bg-btn-hover-light focus:ring-primary",
    secondary: "text--secondary bg-transparent border border-secondary hover:bg-secondary hover:text-primary focus:ring-secondary",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
    disabled: "cursor-not-allowed opacity-50",
  };

  // If href is provided, render a Link component (for React Router)
  if (href) {
    return (
      <Link
        to={href}
        target={target}
        className={`${baseStyles} ${variantStyles[disabled ? "disabled" : variant]} ${className}`}
        aria-label={children} // Using children for the label in the link
      >
        {children}
      </Link>
    );
  }

  // If no href is provided, render a button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[disabled ? "disabled" : variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
