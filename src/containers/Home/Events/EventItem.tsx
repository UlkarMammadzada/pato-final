import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";

const EventItem = ({
  img,
  bgImg,
  deadline,
}: {
  img: string;
  bgImg: string;
  deadline: string;
}) => {
  return (
    <div className="py-28" style={{ backgroundImage: `url(assets/${bgImg})` }}>
      <div className="text-center mb-10">
        <Text text="Upcoming" color="red" />
        <Title text="Events" color="white" />
      </div>
      <div className=" px-6 xl:max-w-[60%] m-auto">
        <div className="container m-auto grid xl:grid-cols-2 rounded-md overflow-hidden">
          <div className="">
            <img src={`assets/${img}`} className="object-cover" alt="" />
          </div>
          <div className="flex flex-col p-10 bg-white  text-center">
            <h4 className="text-[#222] text-2xl">
              Wines during specific nights
            </h4>
            <p className="text-[#666]">
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia
            </p>
            <Timer deadline={deadline} />
            <Link
              className="flex text-sm items-center self-center text-[#222] font-normal uppercase"
              to={"/"}
            >
              View Detail <ArrowRight className="ml-2" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
