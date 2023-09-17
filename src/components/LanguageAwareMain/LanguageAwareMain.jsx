import { useRecoilValue } from "recoil";
import { languageState } from "../../state/languageState";

export default function LanguageAwareMain({ children }) {
    const language = useRecoilValue(languageState);
    const fontFamily =
        language === "ka"
            ? "BPG Nino Mtavruli, sans-serif"
            : "Montserrat, sans-serif";

    return <main style={{ fontFamily }}>{children}</main>;
}
