import { Play } from "react-feather";
import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";
import FixedBackground from "../../../components/shared/FixedBackground";

const Video = () => {
  return (
    <FixedBackground img="bg-cover-video-2.webp">
      <Text text="Discover" color="red" />
      <Title text="OUR VIDEO" color="white" />
      <div className="m-auto text-black bg-white w-14 h-14 rounded-full hover:bg-[#ec1d25] hover:text-white  transition-all flex items-center justify-center">
        <Play />
      </div>
    </FixedBackground>

  );
};

export default Video;
