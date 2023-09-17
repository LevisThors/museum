import BreakTemplate from "../../assets/break.svg";

import "./Break.scss";

export default function BreakComponent() {
    return (
        <div>
            <div className="Break">
                <div></div>
            </div>
            <img src={BreakTemplate} className="Break-Background" />
        </div>
    );
}
