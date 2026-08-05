import { useEffect, useRef } from "react";
import "./BackgroundVideo.css";
import "./HeroResponsividade.css";

export const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateVideo = () => {
      if (!videoRef.current) return;

      const src = mediaQuery.matches
        ? "./celular-bg-hero-video.mp4"
        : "./bg-hero-video.mp4";

      if (videoRef.current.src.includes(src)) return;

      videoRef.current.src = src;
      videoRef.current.load();
      videoRef.current.play();
    };

    updateVideo();
    mediaQuery.addEventListener("change", updateVideo);

    return () => {
      mediaQuery.removeEventListener("change", updateVideo);
    };
  }, []);

  return (
    <div className="bg-video">
      <video ref={videoRef} autoPlay muted loop playsInline />
    </div>
  );
};
