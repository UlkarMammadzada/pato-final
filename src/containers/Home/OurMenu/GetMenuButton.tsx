import { Link } from "react-router-dom";

const GetMenuButton = ({ text }: { text: string }) => {
  return (
    <Link
      to="/"
      className="absolute z-10 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 bg-white text-xl md:text-2xl uppercase px-3 py-1 md:px-5 md:py-2 rounded-lg transition-all hover:bg-[#ec1d25] hover:text-white "
    >
      {text}
    </Link>
  );
};

export default GetMenuButton;
