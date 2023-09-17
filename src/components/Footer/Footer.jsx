import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { languageState } from "../../state/languageState";
import navbarPack from "../../i18n/hardcodedData";

import "./Footer.scss";

export default function FooterComponent() {
    const [language, setLanguage] = useRecoilState(languageState);
    const languagePackage = navbarPack()[language];

    return (
        <footer>
            <div className="Footer">
                <div className="Footer-Container">
                    <div className="Footer-Left">
                        {languagePackage.footer.columns.map((column, index) => (
                            <div key={index} className="Footer-Column">
                                <h3>{column.title}</h3>
                                <ul>
                                    {column.links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                to={`/${language}/${link.url}`}
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div>
                            <h3>Follow Us</h3>
                            <div className="Footer-FollowUs">
                                <ul>
                                    <li>FB</li>
                                    <li>IG</li>
                                    <li>LI</li>
                                    <li>TW</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Footer-Subscribe">
                            <h3>Subscribe to Newsletter</h3>
                            <div>
                                <input type="text" />
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
