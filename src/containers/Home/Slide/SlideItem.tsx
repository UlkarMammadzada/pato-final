import { Link } from "react-router-dom";

interface SlideItemProps {
  img: string;
  title?: string;
  subTitle?: string;
}

const SlideItem = ({ img,title,subTitle }: SlideItemProps) => {
  return (
    <div className="relative">
      <img className="w-screen h-screen object-cover" src={img} alt="" />
      <div className="absolute z-20 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-courgette">{title}</p>
        <h3 className="text-3xl sm:text-4xl md:text-6xl xl:text-8xl font-bold uppercase my-8">{subTitle}</h3>
        <Link to='menu' className="text-[#ec1d25] bg-white px-5 py-2 rounded-lg">Look Menu</Link>
      </div>
    </div>
  );
};

export default SlideItem;
