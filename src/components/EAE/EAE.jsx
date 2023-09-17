import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardWithDescriptionComponent from "../CardWithDescription/CardWithDescription";
import CardWithoutDescriptionComponent from "../CardWithoutDescription/CardWithoutDescription";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./EAE.scss";
import { useIsMobile } from "../../util/useIsMobile";

export default function EAEComponent({
    title = "",
    mode = "light",
    cardType = "withDescription",
    data = [{}],
    linkText = "show more",
    seeMore = true,
}) {
    const { isMobile } = useIsMobile();
    const bgColorCode = mode === "light" ? "#fffdf9" : " #181919";
    const textColor = mode === "light" ? "black" : "white";
    const [emblaRef] = useEmblaCarousel({
        dragFree: true,
        containScroll: "trimSnaps",
    });

    return (
        <section className="Section" style={{ backgroundColor: bgColorCode }}>
            <div className="Section-Title" style={{ color: textColor }}>
                <h1>{title.toUpperCase()}</h1>
                {!isMobile && (
                    <Link
                        style={{ color: textColor, "--link-color": textColor }}
                    >
                        {linkText.toUpperCase()} {title.toUpperCase()}
                        <span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </Link>
                )}
            </div>
            <div style={{ overflow: "hidden" }} ref={emblaRef}>
                <div className="Section-Cards">
                    {cardType === "withDescription" ? (
                        <>
                            <CardWithDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                            <CardWithDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                            <CardWithDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                            <CardWithDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                        </>
                    ) : (
                        <>
                            <CardWithoutDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                            <CardWithoutDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                            <CardWithoutDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                            <CardWithoutDescriptionComponent
                                mode={mode}
                                data={data}
                            />
                        </>
                    )}
                </div>
            </div>
            {isMobile && (
                <Link
                    style={{ color: textColor, "--link-color": textColor }}
                    className="Section-Link-Mobile"
                >
                    {linkText.toUpperCase()} {title.toUpperCase()}
                    <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </Link>
            )}
        </section>
    );
}

EAEComponent.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.oneOf(["light", "dark"]),
    cardType: PropTypes.oneOf(["withDescription", "withoutDescription"]),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            url: PropTypes.string.isRequired,
        })
    ),
    linkText: PropTypes.string,
    seeMore: PropTypes.bool,
};
