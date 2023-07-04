import GetMenuButton from "./GetMenuButton";

interface ItemCardProps {
  img: string;
  buttonText: string;
  imgClass?: string;
  containerClass?: string;
}

const ItemCard = ({
  img,
  buttonText,
  imgClass = "",
  containerClass = "",
}: ItemCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded ${containerClass}`}>
      <img src={`assets/${img}`} className={imgClass} alt="" />
      <GetMenuButton text={buttonText} />
    </div>
  );
};

export default ItemCard;
