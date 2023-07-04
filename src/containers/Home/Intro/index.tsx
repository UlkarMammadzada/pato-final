import FixedBackground from "../../../components/shared/FixedBackground";
import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";
import IntroContent from "./IntroContent";

const Intro = () => {
  return (
    <>
      <FixedBackground img="bg-intro-01.webp">
        <Text text="Discover" color="red" />
        <Title text="PATO PLACE" color="white" />
      </FixedBackground>
      <IntroContent />
    </>
  );
};

export default Intro;
