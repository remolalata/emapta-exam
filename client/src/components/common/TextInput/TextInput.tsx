import React from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: "text" | "password" | "email" | "number";
  className?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "",
  label,
  type = "text",
  className,
  errorMessage,
  required = false,
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col gap-y-0.5 ${className || ""}`}>
      {label && <label className="uppercase text-gray-400 font-medium text-sm">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-400 p-2.5 bg-white rounded-xs focus:outline-none focus:ring focus:ring-gray-600"
        required={required}
        disabled={disabled}
      />
      {errorMessage && <p className="mt-0.5 text-xs text-red-400">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
