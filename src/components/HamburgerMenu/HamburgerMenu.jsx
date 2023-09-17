import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { languageState } from "../../state/languageState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import navbarPack from "../../i18n/hardcodedData";

import "./HamburgerMenu.scss";

export default function HamburgerMenuComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useRecoilState(languageState);
    const navigate = useNavigate();
    const languagePackage = navbarPack()[language];

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("DisableScrolling");
        } else {
            document.body.classList.remove("DisableScrolling");
        }

        return () => {
            document.body.classList.remove("DisableScrolling");
        };
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        navigate(`/${selectedLanguage}`);
    };

    return (
        <>
            <FontAwesomeIcon
                icon={faBars}
                style={{
                    color: "#ffffff",
                    height: 30,
                }}
                onClick={handleOpen}
            />

            <div
                className={`HamburgerMenu HamburgerMenu-${
                    isOpen ? "Opening" : "Closing"
                }`}
                style={{
                    height: window.innerHeight,
                    maxHeight: window.innerHeight,
                    width: window.innerWidth,
                }}
            >
                <div className="HamburgerMenu-Top">
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{
                            color: "#ffffff",
                            height: 30,
                        }}
                        onClick={handleClose}
                    />
                    <div className="Navbar-Language">
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="ka">ქართული</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
                <div className="HamburgerMenu-Bottom">
                    <ul>
                        {languagePackage.navLinks.map((title, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/${language}/`}>
                                        {title.toUpperCase()}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
