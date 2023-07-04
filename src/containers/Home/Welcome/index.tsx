import { ArrowRight } from "react-feather";
import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";

const WelcomeSection = () => {
  return (
    <div className="bg-[#eeeeee] py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 m-auto gap-10 xl:gap-20 items-center">
        <div className="text-center">
          <Text text="Italian Restaurant" color="red"/>
          <Title text="WELCOME"/>
          <p className="text-[#666]">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis ligula sem id neque.
          </p>
          <button className="hover:text-[#ec1d25] transition-all m-auto mt-4 text-[#666] font-light flex items-center">OUR STORY <ArrowRight className="ml-2"/></button>
        </div>
        <div className="rounded-2xl overflow-hidden w-[70%] m-auto">
            <img className="hover:scale-110 transition-all object-cover" src="assets/our-story-01.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
