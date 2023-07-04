import MenuCard from "../../../components/cards/MenuCard";
import { IMenuItem } from "../../../types";

const SpecialMenu = ({ items }: { items: IMenuItem[] }) => {
  return (
    <div className="container m-auto py-32 px-6 grid md:grid-cols-2 gap-8">
      {items?.map((item, index) => (
        <MenuCard key={index} {...item} />
      ))}
    </div>
  );
};

export default SpecialMenu;
