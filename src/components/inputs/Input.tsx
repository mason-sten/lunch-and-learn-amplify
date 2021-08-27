import React from "react";

interface Props {
  className?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({ className, label, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={label} className="block mb-4">
        {label}
      </label>
      <input
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 rounded bg-gray-700 shadow-inner"
      />
    </div>
  );
};

export default Input;
