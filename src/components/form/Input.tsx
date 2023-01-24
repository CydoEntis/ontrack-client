import React from "react";

type Props = {
  className?: string;
  id: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; //TODO Make onChange required.
};

const Input = ({ className, id, type, onChange, value }: Props) => {
  return (
    <input
      className={`${className} rounded-lg bg-off-white p-2 outline-accent-30`}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
