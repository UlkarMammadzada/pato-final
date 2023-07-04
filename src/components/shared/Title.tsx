const Title = ({
  text = "",
  color = "black",
  className,
}: {
  text: string;
  color?: "red" | "white" | "black";
  className?: string;
}) => {
  const newColor =
    color === "red"
      ? "text-[#ec1d25]"
      : color === "black"
      ? "text-black"
      : "text-white";
  return (
    <p
      className={`font-poppins text-[#222] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-[6px] mb-10 uppercase ${className} ${newColor}`}
    >
      {text}
    </p>
  );
};

export default Title;
