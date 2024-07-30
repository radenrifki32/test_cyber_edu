import { NavigationType } from "../lib/types/naviigation";
import { NavLink } from "react-router-dom";
function Header () {
    const navigationItems: NavigationType[] = [
        { to: "/", label: "Home" },
        { to: "/trending", label: "Trending" },
        { to: "/tv", label: "TV" },
      ];
    
    return (
        <header className="container-header">
        <nav className="container-navbar">
          <div className="container-logo">
            <img src="/logo-fusion.png" alt="logo-fusion" />
            <p className="logo-text">
              Fusion <span>Movie</span>
            </p>
          </div>
          <div className="container-list">
            <ul className="container-ul">
              {navigationItems.map((item: NavigationType, index: number) => (
                <NavLink
                key={index}
                  to={item.to}
                  className="navbar-link"
                  style={{ padding: 5, textDecoration: "none" ,color: 'black', fontSize: '18px' ,fontWeight : "light" }}
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    )
}
export default Header