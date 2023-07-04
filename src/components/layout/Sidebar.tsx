import { X } from "react-feather";
import GalleryItem from "../shared/GalleryItem";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Sidebar = ({
  toggleSidebar,
  setToggleSidebar,
}: {
  toggleSidebar: boolean;
  setToggleSidebar: (bool: boolean) => void;
}) => {
  return (
    <>
      <div
        className={` w-full h-full top-0 bg-black fixed z-10 ${
          toggleSidebar ? "bg-opacity-60 right-0" : "bg-opacity-0 -right-full"
        }`}
        onClick={() => setToggleSidebar(false)}
      ></div>
      <div
        className={`w-96 h-screen bg-white fixed top-0 z-30 transition-all text-center ${
          toggleSidebar ? "right-0" : "-right-full"
        }`}
      >
        <span className="py-4 px-4 flex justify-end ">
          <X
            className="cursor-pointer hover:text-[#ec1d25] transition-all"
            onClick={() => setToggleSidebar(false)}
          />
        </span>
        <Navbar type="mobile" />
        <Link
          className="bg-black text-white rounded-lg py-2 px-6 inline-block mt-10 mb-20 uppercase font-montserrat tracking-[1px]"
          to="/reservation"
        >
          Reservation
        </Link>
        <div>
          <h3 className="font-poppins font-medium text-lg uppercase tracking-[3px] text-[#333] mb-8">
            Gallery
          </h3>
          <div className="grid grid-cols-3 gap-4 px-10">
            <GalleryItem img="photo-gallery-1.webp" />
            <GalleryItem img="photo-gallery-2.webp" />
            <GalleryItem img="photo-gallery-3.webp" />
            <GalleryItem img="photo-gallery-5.webp" />
            <GalleryItem img="photo-gallery-6.webp" />
            <GalleryItem img="photo-gallery-7.webp" />
            <GalleryItem img="photo-gallery-9.webp" />
            <GalleryItem img="photo-gallery-10.webp" />
            <GalleryItem img="photo-gallery-11.webp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
