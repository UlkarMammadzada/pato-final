import { mainMenu } from "../../../resource/menu";
import MainMenuItem from "./MainMenuItem";
import MainMenuTitle from "./MainMenuTitle";

const MainMenu = () => {
  return (
    <div className="py-32 px-6 bg-[#ececec]">
      <div className="container m-auto grid md:grid-cols-2 gap-20">
        <div>
            {mainMenu.slice(0, 2).map(({ name, items }) => (
              <>
                <MainMenuTitle title={name} />
                {items.map(({ name, description, price }) => (
                  <MainMenuItem
                    name={name}
                    price={price}
                    description={description}
                  />
                ))}
              </>
            ))}
        </div>
        <div>
            {mainMenu.slice(2, 4).map(({ name, items }) => (
              <>
                <MainMenuTitle title={name} />
                {items.map(({ name, description, price }) => (
                  <MainMenuItem
                    name={name}
                    price={price}
                    description={description}
                  />
                ))}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
