import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PlaceholderImage from "../../assets/card.svg";

import "./CardWithoutDescription.scss";

export default function CardWithoutDescriptionComponent({
    mode = "light",
    data = [{}],
}) {
    const bgColor = mode === "light" ? "#181919" : "#fffdf9";
    const textColor = mode === "light" ? "white" : "black";

    return (
        <div className="CardWithoutDesc">
            <Link to={data.url}>
                <div className="CardWithoutDesc-Image">
                    <img src={PlaceholderImage} />
                </div>
                <div
                    className="CardWithoutDesc-Body"
                    style={{
                        backgroundColor: bgColor,
                        color: textColor,
                    }}
                >
                    <div>
                        <h2>{data.title}</h2>
                    </div>
                    <div className="CardWithoutDesc-Link">
                        <span
                            style={{
                                borderBottomColor: "rgba(0, 0, 0, 0.280)",
                            }}
                        >
                            {data.moreText}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

CardWithoutDescriptionComponent.propTypes = {
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
