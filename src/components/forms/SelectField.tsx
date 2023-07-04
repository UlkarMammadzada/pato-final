const SelectField = ({
  id,
  label,
  optionText,
  options,
}: {
  id: string;
  label: string;
  optionText: boolean;
  options: (number | string)[];
}) => {
  return (
    <div className="flex flex-col">
      <label  className="text-[#555] mb-2" htmlFor={id}>{label}</label>
      <select className="border border-[#d9d9d9] p-3 rounded-md outline-none" name={id} id={id}>
        {options?.map((item) => (
          <option key={item} value={item}>
            {item} {optionText ? label : ""}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
