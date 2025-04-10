import { cn } from "../../lib/utils";

function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}) {
  const baseClass = "btn"; // DaisyUI base button class

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    info: "btn-info",
    success: "btn-success",
    warning: "btn-warning",
    error: "btn-error",
    ghost: "btn-ghost",
    link: "btn-link",
    outline: "btn-outline",
    active:"btn-active"
  };

  const sizes = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn(
        baseClass,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;