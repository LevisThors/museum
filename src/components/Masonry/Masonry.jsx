import { useEffect, useRef } from "react";
import Masonry from "react-responsive-masonry";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Masonry1 from "../../assets/1.jpg";
import Masonry2 from "../../assets/2.jpg";
import Masonry3 from "../../assets/3.jpg";
import Masonry4 from "../../assets/4.jpg";
import Masonry5 from "../../assets/5.jpg";
import Masonry6 from "../../assets/6.jpg";
import { useIsMobile } from "../../util/useIsMobile";

import "./Masonry.scss";
const masonryImages = [
    Masonry1,
    Masonry2,
    Masonry3,
    Masonry4,
    Masonry5,
    Masonry6,
    Masonry1,
    Masonry2,
    Masonry3,
    Masonry4,
    Masonry5,
    Masonry6,
];

export default function MasonryComponent({ title, mode = "light", moreText }) {
    const { isMobile } = useIsMobile();
    const imagesRef = useRef([]);
    const bgColor = mode === "light" ? "#fffdf9" : "#181919";
    const fadeColor =
        mode === "light"
            ? "linear-gradient(0deg, #fffdf9 20%, transparent)"
            : "linear-gradient(0deg, #181919 20%, transparent)";
    const textColor = mode === "light" ? "black" : "white";

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    observer.unobserve(image);

                    image.classList.add("visible");
                }
            });
        };

        const observer = new IntersectionObserver(
            handleIntersection,
            observerOptions
        );

        imagesRef.current.forEach((image) => {
            observer.observe(image);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="Masonry-Viewport" style={{ backgroundColor: bgColor }}>
            <div className="Section-Title" style={{ color: textColor }}>
                <h1>{title}</h1>
            </div>
            <div
                className="Masonry-Container"
                style={{ width: !isMobile ? "80%" : window.innerWidth }}
            >
                <div className="Masonry-Fade" style={{ background: fadeColor }}>
                    <Link className="Masonry-Button">{moreText}</Link>
                </div>
                <Masonry columnsCount={isMobile ? 2 : 3} gutter="10px">
                    {masonryImages.map((image, index) => (
                        <img
                            key={index}
                            ref={(el) => imagesRef.current.push(el)}
                            data-src={image}
                            className="fade-in"
                        />
                    ))}
                </Masonry>
            </div>
        </div>
    );
}

MasonryComponent.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.oneOf(["light", "dark"]),
    moreText: PropTypes.string,
};
