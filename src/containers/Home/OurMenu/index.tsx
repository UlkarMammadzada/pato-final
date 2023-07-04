import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";
import ItemCard from "./ItemCard";

const OurMenu = () => {
  return (
    <div className="py-28 px-6 bg-[#f5f2ec]">
      <div className="container m-auto">
        <div className="text-center ">
          <Text text="Discover" color="red" />
          <Title text="OUR MENU" color="black" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-start-1 col-end-2 md:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              <ItemCard img="our-menu-1.webp" buttonText="Lunch" />
              <ItemCard img="our-menu-2.jpg" buttonText="Dinner" />
            </div>
            <ItemCard
              img="our-menu-5.webp"
              imgClass="max-h-72 object-cover"
              containerClass="mt-6"
              buttonText="Happy Hour"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            <ItemCard img="our-menu-3.webp" buttonText="Drink" />
            <ItemCard img="our-menu-4.webp" buttonText="Starters" />
            <ItemCard containerClass="col-span-2  md:col-span-1" img="our-menu-6.webp" buttonText="Dessert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
