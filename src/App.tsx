import { useEffect, useState } from "react";
import MenuIcon from "./assets/svg/menu.svg";
import UsersIcon from "./assets/svg/users.svg";
import VideoIcon from "./assets/svg/video.svg";
import ArrowLeftIcon from "./assets/svg/arrow-left.svg";
import ArrowRightIcon from "./assets/svg/arrow-right.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    const value = !isOpen;
    setIsOpen(value);
    localStorage.setItem("menu", value.toString());
  };

  const showLabel = (label: string) => {
    if (isOpen) return <span>{label}</span>;
  };

  useEffect(() => {
    //localStorage.getItem("menu");
  }, []);

  return (
    <div className="dashboard">
      <aside className={`sidebar --${isOpen ? "open" : "close"}`}>
        <div className="sidebar_menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            <img
              src={ArrowLeftIcon}
              className="sidebar_menu-icon"
              alt="arrow left"
            />
          ) : (
            <img
              src={ArrowRightIcon}
              className="sidebar_menu-icon"
              alt="arrow right"
            />
          )}
        </div>
        <ul className="sidebar__list">
          <li>
            <img src={UsersIcon} className="sidebar_menu-icon" alt="users" />
            {showLabel("Users")}
          </li>
          <li>
            <img src={VideoIcon} className="sidebar_menu-icon" alt="video" />
            {showLabel("Videos")}
          </li>
        </ul>
      </aside>
      <header className="header">Header</header>
      <main className="content">Content</main>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
