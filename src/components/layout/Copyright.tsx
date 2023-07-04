import { Link } from "react-router-dom";
import SosialIcons from "../shared/SosialIcons";

const Copyright = () => {
  return (
    <div className="bg-black py-8 px-6">
      <div className="container m-auto flex justify-between">
        <SosialIcons className="text-white text-lg" />
        <p className="text-[#999]">
          @ 2017 Colorlib.{" "}
          <Link to="/" className="text-white hover:text-[#ec1d25]">
            Get The Theme
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
