import React from "react";

interface Props {
  className?: string;
  label: string;
  value: string;
  rows?: number;
  onChange: (value: string) => void;
}

const TextArea: React.FC<Props> = ({ className, label, rows, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={label} className="block mb-4">
        {label}
      </label>
      <textarea
        id={label}
        rows={rows || 3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 rounded bg-gray-700 shadow-inner"
      ></textarea>
    </div>
  );
};

export default TextArea;
