import { useEffect, useState } from "react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import SosialIcons from "../shared/SosialIcons";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [stickyClass, setStickyClass] = useState("text-white");
  const [logo, setLogo] = useState("logo.webp");

  useEffect(() => {
    window.addEventListener("scroll", stickHeader);

    return () => {
      window.removeEventListener("scroll", stickHeader);
    };
  }, []);

  const stickHeader = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 40) {
        setStickyClass("bg-white text-black py-5");
        setLogo("logo2.webp");
      } else {
        setStickyClass("bg-transparent text-white");
        setLogo("logo.webp");
      }
    }
  };

  return (
    <>
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div
        className={`fixed w-screen py-10 font-medium transition-all z-20  ${stickyClass}`}
      >
        <div className="container m-auto px-5">
          <div className="flex justify-between items-center gap-10">
            <Link to="/">
              <img
                className="w-20 sm:w-28 xl:w-40"
                src={`/assets/${logo}`}
                alt=""
              />
            </Link>
            <Navbar type="desktop" />
            <div className="flex gap-10">
              <SosialIcons className="justify-between" />
              <Menu className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
