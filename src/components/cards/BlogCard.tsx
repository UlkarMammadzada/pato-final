import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
interface BlogCard {
  img: string;
  title: string;
  description: string;
  moreText?:string
}
const BlogCard = ({ img, title, description,moreText }: BlogCard) => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden">
        <img className="hover:scale-110 transition-all" src={`/assets/${img}`} />
      </div>
      <div className="mt-2">
        <h1 className="font-poppins text-xl hover:text-[#ec1d25] transition-all mb-2">{title}</h1>
        <p className="text-[#666] mb-2">{description}</p>
        <Link className="flex text-sm font-normal items-center" to={"/"}>{moreText?"CONTINUE READING":"LEARN MORE"}  <ArrowRight className="ml-2"/> </Link>
      </div>
    </div>
  );
};

export default BlogCard;
