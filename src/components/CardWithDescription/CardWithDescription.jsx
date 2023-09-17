import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PlaceholderImage from "../../assets/card.svg";
import { useIsMobile } from "../../util/useIsMobile";

import "./CardWithDescription.scss";

export default function CardWithDescriptionComponent({
    mode = "light",
    data = [{}],
}) {
    const { isMobile } = useIsMobile();
    const bgColor = mode === "light" ? "#181919" : "#fffdf9";
    const textColor = mode === "light" ? "white" : "black";

    return (
        <div className="CardWithDesc">
            <Link to={data.url}>
                {!isMobile && (
                    <div
                        className="CardWithDesc-Body"
                        style={{ color: textColor, backgroundColor: bgColor }}
                    >
                        <div>
                            <h2>{data.title}</h2>
                        </div>
                        <div>
                            <p>{data.description}</p>
                        </div>
                        <div className="CardWithDesc-Link">
                            <span>{data.moreText}</span>
                        </div>
                    </div>
                )}
                <div className="CardWithDesc-Image">
                    <img src={PlaceholderImage} />
                </div>
            </Link>
        </div>
    );
}

CardWithDescriptionComponent.propTypes = {
    mode: PropTypes.oneOf(["light", "dark"]),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            url: PropTypes.string.isRequired,
            moreText: PropTypes.string,
        })
    ),
};
