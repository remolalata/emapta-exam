import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) => {
  const variantClasses =
    variant === "primary"
      ? "bg-green-400 hover:bg-green-500 text-white border border-green-400 hover:border-green-500"
      : "bg-white text-gray-500 hover:text-gray-600 border border-gray-400 hover:border-gray-500 hover:text-gray-600";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-4 cursor-pointer rounded uppercase font-bold ${variantClasses} shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
