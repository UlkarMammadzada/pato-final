const Input = ({
  id,
  type,
  placeholder,
}: {
  id?: string;
  type: string;
  placeholder?: string;
}) => {
  return (
    <input
      className="border border-[#d9d9d9] p-3 rounded-md outline-none"
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
