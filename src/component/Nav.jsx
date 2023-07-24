import { useState } from "react"; // import state
import { NavLink } from "react-router-dom";

import Logo from '../img/Logo.png'

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between text-blue-light-1 py-3">
      <a href="/">
        <img src={Logo} className="h-8 mr-3 invert"  alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden cursor-pointer px-2">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? " absolute w-full h-screen top-0 left-0 bg-black z-10 flex flex-col justify-evenly items-center" : "hidden"}>

            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-3xl">
              <li className="my-8 uppercase hover:scale-110 hover:duration-300 ...">
                <a href="/">Home</a>
              </li>
              <li className=" my-8 uppercase  hover:scale-110 hover:duration-300 ...">
                <a href="/About">About</a>
              </li>
              <li className=" my-8 uppercase  hover:scale-110 hover:duration-300 ...">
                <a href="/Portfolio">Portfolio</a>
              </li>
              <li className=" my-8 uppercase hover:scale-110 hover:duration-300 ...">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex pr-6 text-xl" >
          <li className="hover:scale-110 hover:duration-300 ...">
          <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
          </li>
          <li className="hover:scale-110 hover:duration-300 ..." >
          <NavLink exact to="/About" activeClassName="active">
                About
              </NavLink>
          </li>
          <li className="hover:scale-110 hover:duration-300 ...">
          <NavLink exact to="/PortFolio" activeClassName="active">
                Portfolio
              </NavLink>
          </li>
          <li className="hover:scale-110 hover:duration-300 ...">
          <NavLink exact to="/Contact" activeClassName="active">
                Contact
              </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}


// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.patue })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }

export default Nav
