import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navIcon" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
      {isOpen && (
        <div className="overlay">
          <ul className="menu">
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>Menu</li>
            <li onClick={toggleMenu}>About Us</li>
          </ul>
        </div>
      )}
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: flex-end;
          padding: 10px 20px;
          background-color: #fff;
        }

        .navIcon {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          z-index: 1001; /* Ensure the icon stays above the overlay */
        }

        .line {
          width: 25px;
          height: 3px;
          background-color: #000;
          margin: 3px 0;
          transition: all 0.3s ease;
        }

        .line.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .line.open:nth-child(2) {
          opacity: 0;
        }

        .line.open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .menu {
          list-style-type: none;
          padding: 0;
          text-align: center;
        }

        .menu li {
          color: white;
          font-size: 24px;
          margin: 20px 0;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Navbar;
