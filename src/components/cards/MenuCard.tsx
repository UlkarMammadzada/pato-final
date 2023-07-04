import { IMenuItem } from "../../types";

const MenuCard = ({ name, description, price, image }: IMenuItem) => {
  return (
    <div className="flex items-center gap-8">
      <div className="overflow-hidden rounded-lg w-40">
        <img src={`assets/${image}`} alt="" className="scale-110 transition-all" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-poppins font-light text-[#333] text-lg tracking-[2px] mb-1">{name}</h3>
        <p className="text-sm text-[#666] mb-4">{description}</p>
        <p className="uppercase text-2xl text-[#333]">${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
