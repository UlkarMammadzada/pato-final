import Blogs from "./Blog";
import Booking from "./Booking";
import Events from "./Events";
import Intro from "./Intro";
import OurMenu from "./OurMenu";
import Reviews from "./Reviews";
import SpecialsSignUp from "../../components/shared/SpecialsSignUp";
import Slides from "./Slide/Slides";
import Video from "./Video";
import WelcomeSection from "./Welcome";

const HomeContainer = () => {
  return (
    <>
      <Slides />
      <WelcomeSection />
      <Intro />
      <OurMenu />
      <Events />
      <Booking />
      <Reviews />
      <Video />
      <Blogs />
      <SpecialsSignUp />
    </>
  );
};

export default HomeContainer;
