import { Mail, Navigation, Phone } from "react-feather";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import GalleryItem from "../shared/GalleryItem";

const Footer = () => {
  return (
    <>
      <div className="bg-[#222222] py-20 px-6">
        <div className="container m-auto gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            <div>
              <FooterTitle text="Contact Us" />
              <span className="text-[#999] flex gap-2 mb-4 items-center">
                <Navigation className="rotate-[137deg]" />
                <FooterText text="8th floor, 379 Hudson St, New York, NY 10018" />
              </span>
              <span className="text-[#999] flex gap-2 mb-4 items-center">
                <Phone />
                <FooterText text="(+1) 96 716 6879" />
              </span>
              <span className="text-[#999] flex gap-2 mb-4 items-center">
                <Mail />
                <FooterText text="contact@site.com" />
              </span>
            </div>
            <div>
              <FooterTitle text="Opening Times" />
              <FooterText className="mb-4" text="09:30 AM – 11:00 PM" />
              <FooterText className="mb-4" text="Every Day" />
            </div>
          </div>
          <div>
            <FooterTitle text="LATEST TWITTER" />
            <div className="flex flex-col">
              <FooterLink text="@colorlib" link="/" />
              <FooterText
                className="my-1"
                text="Activello is a good option. It has a slider built into that displays the featured image in the slider."
              />
              <FooterLink text="https://buff.ly/2zaSfAQ" link="/" />
              <p className="text-[#555555] text-xs mt-5">21 Dec 2017</p>
            </div>
            <div className="flex flex-col mt-8">
              <FooterLink text="@colorlib" link="/" />
              <FooterText
                className="my-1"
                text="Activello is a good option. It has a slider built into that displays the featured image in the slider."
              />
              <FooterLink text="https://buff.ly/2zaSfAQ" link="/" />
              <p className="text-[#555555] text-xs mt-5">21 Dec 2017</p>
            </div>
          </div>
          <div>
            <FooterTitle text="Gallery" />
            <div className="grid grid-cols-4 gap-4">
              <GalleryItem img="photo-gallery-1.webp" />
              <GalleryItem img="photo-gallery-2.webp" />
              <GalleryItem img="photo-gallery-3.webp" />
              <GalleryItem img="photo-gallery-4.webp" />
              <GalleryItem img="photo-gallery-5.webp" />
              <GalleryItem img="photo-gallery-6.webp" />
              <GalleryItem img="photo-gallery-7.webp" />
              <GalleryItem img="photo-gallery-8.webp" />
              <GalleryItem img="photo-gallery-9.webp" />
              <GalleryItem img="photo-gallery-10.webp" />
              <GalleryItem img="photo-gallery-11.webp" />
              <GalleryItem img="photo-gallery-12.webp" />
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;

const FooterTitle = ({ text }: { text: string }) => {
  return (
    <h4 className="text-white font-poppins text-2xl font-medium mb-4">
      {text}
    </h4>
  );
};
const FooterText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-[#999] text-sm ${className}`}>{text}</p>;
};

const FooterLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link className="text-[#ec1d25] text-sm font-montserrat" to={link}>
      {text}
    </Link>
  );
};
