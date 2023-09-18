import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../assets/banner.svg";
import { useIsMobile } from "../../util/useIsMobile";
import { useRecoilState } from "recoil";
import { languageState } from "../../state/languageState";
import BannerVideo from "../../assets/bannerVideo.mp4";
import navbarPack from "../../i18n/hardcodedData";

import "./Banner.scss";

export default function BannerComponent() {
    const { isMobile } = useIsMobile();
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [language, setLanguage] = useRecoilState(languageState);
    const languagePackage = navbarPack()[language];

    useEffect(() => {
        if (videoRef.current && videoLoaded) {
            videoRef.current.play();
        }
    }, [videoLoaded]);

    return (
        <section className="Banner">
            <div className="Banner-Text">
                <div>
                    <span>{languagePackage.bannerText}</span>
                    <Link>
                        <span>
                            <FontAwesomeIcon icon={faTicket} />
                        </span>
                        {languagePackage.bookTickets}
                    </Link>
                </div>
            </div>
            <div className="Banner-Hours">
                <div>
                    <span
                        className="Banner-Hours-Identifier"
                        style={{
                            backgroundColor: "green",
                        }}
                    ></span>
                    <span className="Banner-Hours-Text">
                        {languagePackage.workingHoursText}
                    </span>
                </div>
            </div>
            <div>
                {videoLoaded ? (
                    <>
                        <video
                            ref={videoRef}
                            width={!isMobile && "100%"}
                            height={isMobile && "100%"}
                            autoPlay
                            muted
                            loop
                            onCanPlay={() => setVideoLoaded(true)}
                        >
                            <source src={BannerVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="Banner-Overlay"></div>
                        <button
                            onClick={() => {
                                if (videoRef.current.paused) {
                                    videoRef.current.play();
                                } else {
                                    videoRef.current.pause();
                                }
                            }}
                        >
                            {videoRef.current && videoRef.current.paused ? (
                                <i className="fas fa-play"></i>
                            ) : (
                                <i className="fas fa-pause"></i>
                            )}
                        </button>
                    </>
                ) : (
                    <img
                        src={Banner}
                        alt="Fallback"
                        width="100%"
                        onLoad={() => setVideoLoaded(true)}
                    />
                )}
            </div>
        </section>
    );
}
