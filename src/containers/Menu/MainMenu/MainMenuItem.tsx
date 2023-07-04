import { Link } from "react-router-dom";

const MainMenuItem = ({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-center gap-4 mb-2">
        <Link
          to="/menu"
          className="font-poppins uppercase text-[#333] font-light text-lg hover:text-[#ec1d25] transition-all"
        >
          {name}
        </Link>
        <span
          className="bg-repeat flex-grow-[1] h-[2px]"
          style={{ backgroundImage: "url(assets/pattern3.webp)" }}
        ></span>
        <span className="font-montserrat uppercase text-[#333] text-2xl">
          ${price}
        </span>
      </div>
      <p className="font-montserrat  text-[#666] text-sm">{description}</p>
    </div>
  );
};

export default MainMenuItem;
