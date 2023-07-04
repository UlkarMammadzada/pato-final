const BlackButton = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`bg-black text-white py-2 px-6 self-center rounded-lg uppercase ${className}`}
    >
      {text}
    </button>
  );
};

export default BlackButton;
