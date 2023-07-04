import FixedBackground from "../../components/shared/FixedBackground";
import PageHeader from "../../components/shared/PageHeader";
import SpecialsSignUp from "../../components/shared/SpecialsSignUp";
import Title from "../../components/shared/Title";
import { dinnerMenu } from "../../resource/dinner";
import { lunchMenu } from "../../resource/lunch";
import MainMenu from "./MainMenu";
import SpecialMenu from "./SpecialMenu";

const MenuContainer = () => {
  return (
    <>
      <PageHeader img="bg-title-page-1.webp" title="pato menu" />
      <MainMenu />
      <FixedBackground img="header-menu-1.webp">
        <Title className="mb-0" text="LUNCH" color="white" />
      </FixedBackground>
      <SpecialMenu items={lunchMenu} />
      <FixedBackground img="header-menu-2.webp">
        <Title className="mb-0" text="DINNER" color="white" />
      </FixedBackground>
      <SpecialMenu items={dinnerMenu} />
      <SpecialsSignUp />
    </>
  );
};

export default MenuContainer;
