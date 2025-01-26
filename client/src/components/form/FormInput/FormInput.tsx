import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormValues } from "~types/forms";

interface FormInputProps {
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  placeholder?: string;
  label?: string;
  type?: "text" | "password" | "email" | "number";
  className?: string;
  disabled?: boolean;
  error?: FieldError;
  validationRules?: object
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  register,
  placeholder = "",
  label,
  type = "text",
  className = "",
  disabled = false,
  error,
}) => {
  return (
    <div className={`flex flex-col gap-y-0.5 ${className || ""}`}>
      {label && (
        <label className="uppercase text-gray-400 font-medium text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="border border-gray-400 p-2.5 bg-white rounded-xs focus:outline-none focus:ring focus:ring-gray-600"
        disabled={disabled}
      />
      {error && (
        <p className="mt-0.5 text-xs text-red-400">{error.message}</p>
      )}
    </div>
  );
};

export default FormInput;
