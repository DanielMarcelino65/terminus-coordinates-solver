import React from 'react';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  type: 'X' | 'Y' | 'Z';
};

export const Input = ({ value, onChange, type }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={type}
      onChange={(e) => onChange(e.target.value)}
      className="border border-white rounded-md p-2 bg-black"
    />
  );
};
