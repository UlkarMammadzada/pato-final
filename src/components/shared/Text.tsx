const Text = ({
  text='',
  color='black',
}: {
  text: string;
  color?: "red" | "white" | "black";
}) => {
  const newColor =
    color === "red"
      ? "text-[#ec1d25]"
      : color === "black"
      ? "text-black"
      : "text-white";
  return <p className={`font-courgette text-xl sm:text-2xl xl:text-3xl ${newColor} text-3xl`}>{text}</p>;
};

export default Text;
