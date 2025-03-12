import { useState } from "react";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`w-5 h-5 border-2 rounded-xl transition-all z-20 relative ${
          isChecked
            ? "bg-white border-secondary3 before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-[12px] before:h-[12px] before:bg-secondary3 before:rounded-xl"
            : "border-white bg-white"
        }`}
      />
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
};

export default Checkbox;
