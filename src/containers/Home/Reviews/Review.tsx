import { Star } from "react-feather";

const Review = ({
  img,
  author,
  message,
}: {
  img: string;
  message: string;
  author: string;
}) => {
  return (
    <div className="flex flex-col items-center mb-20 max-w-screen-md text-center m-auto">
      <div className="w-32 h-32 overflow-hidden rounded-full border-[#ec1d25] border-4">
        <img src={`assets/${img}`} alt="" />
      </div>
      <div className="flex gap-2 mt-5 text-[#ec1d25]">
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </div>
      <p className="text-[#666] my-6">{message}</p>
      <p className="text-[#222] uppercase"> {author}</p>
    </div>
  );
};

export default Review;
