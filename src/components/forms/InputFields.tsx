import Input from "./Input";

const InputField = ({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-[#555] mb-2" htmlFor={id}>{label}</label>
     <Input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
