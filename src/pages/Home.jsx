import BannerComponent from "../components/Banner/Banner";
import EAEComponent from "../components/EAE/EAE";
import BreakComponent from "../components/Break/Break";
import MasonryComponent from "../components/Masonry/Masonry";
import { useRecoilState } from "recoil";
import { languageState } from "../state/languageState";
import navbarPack from "../i18n/hardcodedData";

export default function Home() {
    const [language, setLanguage] = useRecoilState(languageState);
    const languagePackage = navbarPack()[language];

    return (
        <>
            <BannerComponent />
            {languagePackage.sections.map((section, index) => {
                if (section.sectionType === "carousel") {
                    return (
                        <EAEComponent
                            key={index}
                            title={section.title}
                            mode={section.mode}
                            cardType={section.cardType}
                            linkText={languagePackage.moreLinkText}
                            data={languagePackage.testPost}
                        />
                    );
                } else if (section.sectionType === "masonry") {
                    return (
                        <MasonryComponent
                            key={index}
                            mode={section.mode}
                            title={section.title}
                            moreText={languagePackage.testPost.moreText}
                        />
                    );
                } else if (section.sectionType === "break") {
                    return <BreakComponent key={index} />;
                }
            })}
        </>
    );
}
