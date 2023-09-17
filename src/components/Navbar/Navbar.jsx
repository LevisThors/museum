import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import Logo from "../../assets/logo.webp";
import MobileLogo from "../../assets/logo.png";
import { useRecoilState } from "recoil";
import { languageState } from "../../state/languageState";
import { useEffect } from "react";
import { useIsMobile } from "../../util/useIsMobile";
import HamburgerMenuComponent from "../HamburgerMenu/HamburgerMenu";
import navbarPack from "../../i18n/hardcodedData";

import "./Navbar.scss";

export default function NavbarComponent() {
    const { isMobile } = useIsMobile();
    const [language, setLanguage] = useRecoilState(languageState);
    const location = useLocation();
    const navigate = useNavigate();
    const languagePackage = navbarPack()[language];

    useEffect(() => {
        // setLanguage(location.pathname.split("/")[1]);
    });

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        navigate(`/${selectedLanguage}`);
    };

    return (
        <>
            <nav className="Navbar">
                <div
                    className="Navbar-Top"
                    style={isMobile ? { height: 40 } : { height: 60 }}
                >
                    <div className="Navbar-Menu">
                        {isMobile && <HamburgerMenuComponent />}
                    </div>
                    <div className="Navbar-Logo">
                        <img
                            src={isMobile ? MobileLogo : Logo}
                            height={isMobile ? 40 : 60}
                            alt="Logo"
                        />
                    </div>
                    <div className="Navbar-Language">
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="ka">KA</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
                {!isMobile && (
                    <div className="Navbar-Bottom">
                        <div>
                            <ul className="Navbar-Links">
                                {languagePackage.navLinks.map(
                                    (title, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={`/${language}/`}>
                                                    {title.toUpperCase()}
                                                </Link>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
