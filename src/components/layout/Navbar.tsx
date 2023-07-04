import { Link } from "react-router-dom";
const Navbar = ({ type }: { type: "mobile" | "desktop" }) => {
  return (
    <ul
      className={`${
        type === "desktop" ? "hidden justify-center gap-16 ml-8" : ""
      }
      ${`${
        type === "mobile" ? "flex-col gap-6 text-center mt-6" : ""
      }`}  w-full  uppercase font-normal xl:flex`}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="menu">Menu</Link>
      </li>
      {type === "desktop" && (
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
      )}
      <li>
        <Link to="gallery">Gallery</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navbar;
