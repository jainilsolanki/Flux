import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "antd";
import {
  PlayCircleOutlined,
  HeartOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { EllipsisText } from "./Ellipsis.component";
import { GiResize } from "react-icons/gi";
import usePIP from "../hooks/usePIP";
import { supportsPIP } from "../utils/PIP";
// eslint-disable-next-line react/prop-types
export const HeroComponent = ({ collapsed }) => {
  const gardenOfWords = "/trailers/hero-trailers/garden_of_words.mp4";
  const suzume = "/trailers/hero-trailers/suzume.mp4";
  const weatheringWithYou = "/trailers/hero-trailers/weathering_with_you.mp4";
  const yourName = "/trailers/hero-trailers/your_name.mp4";
  const heroData = [
    {
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMTJjZmQ5MGQtMWU0My00ZTMzLWFmNTMtNDgzNmU4Y2MxOGUxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
      video_data: gardenOfWords,
      name: "Garden of Words",
      release_date: "2013",
      imdb_rating: "7.4",
      duration: "46m",
      description:
        "When a lonely teenager decides to miss his morning lessons in favour of sitting in a lovely garden, he meets a mysterious older woman who shares his feelings of alienation.",
    },
    {
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      video_data: yourName,
      name: "Your Name",
      release_date: "2016",
      imdb_rating: "7.7",
      duration: "1h 47m",
      description:
        "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
    },
    {
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGVkNDc3NjUtNTY5ZS00ZmE0LWE3YzctMDk2OTRlNTdiZWQwXkEyXkFqcGdeQXVyMTU3NDg0OTgx._V1_.jpg",
      video_data: suzume,
      name: "Suzume",
      release_date: "2022",
      imdb_rating: "7.7",
      duration: "2h 2m",
      description:
        "As the skies turn red and the planet trembles, Japan stands on the brink of disaster. However, a determined teenager named Suzume sets out on a mission to save her country. Able to see supernatural forces that others cannot, it's up to her to close the mysterious doors that are spreading chaos across the land. A perilous journey awaits as the fate of Japan rests on her shoulders.",
    },
    {
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDhjOTcyODctZDIwMS00N2Q1LWE2YjQtMzVmMTkwMzM0NDA4XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      video_data: weatheringWithYou,
      name: "Weathering with you",
      release_date: "2019",
      imdb_rating: "8.3",
      duration: "1h 54m",
      description:
        "In Tokyo, a runaway high school student facing financial struggles ends up with a job at a small-time publisher. One day, he meets a young girl who has the ability to control the weather.",
    },
  ];
  const [currentHero, setCurrentHero] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const { togglePIP } = usePIP(videoRef);
  const [isPIPOn, setIsPIPOn] = useState(false);
  const [shouldShowControls, setShouldShowControls] = useState(false);
  useEffect(() => {
    if (videoRef?.current !== null) {
      const video = videoRef.current;
      video.volume = isMuted ? 0 : 1;
    } else {
      return;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnterPIP = () => setIsPIPOn(true);
    const onLeavePIP = () => setIsPIPOn(false);

    video.addEventListener("enterpictureinpicture", onEnterPIP);
    video.addEventListener("leavepictureinpicture", onLeavePIP);
    return () => {
      video.removeEventListener("enterpictureinpicture", onEnterPIP);
      video.removeEventListener("leavepictureinpicture", onLeavePIP);
    };
  }, []);

  const onCanPlay = useCallback(() => {
    if (supportsPIP()) setShouldShowControls(true);
  }, []);

  return (
    <>
      <div
        style={{
          justifyContent: "flex-end",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div style={{ height: "85vh", width: "100%" }}>
          <video
            ref={videoRef}
            src={heroData[currentHero].video_data}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            // controls
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            onCanPlay={onCanPlay}
          />
        </div>

        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              transition: "all 0.2s",
              marginLeft: collapsed ? "80px" : "200px",
              padding: "42px",
              display: "flex",
              gap: 8,
              flexDirection: "column",
            }}
          >
            <img
              src={heroData[currentHero].thumbnail}
              alt={heroData[currentHero].name}
              style={{ height: "180px", width: "130px" }}
            />
            <div>
              <h3
                style={{ color: "#fff", fontWeight: "600", letterSpacing: 1 }}
              >
                {" "}
                {heroData[currentHero].release_date} • IMDb{" "}
                {heroData[currentHero].imdb_rating} •{" "}
                {heroData[currentHero].duration}
              </h3>

              <h2 style={{ color: "#fff" }}>{heroData[currentHero].name}</h2>
              <EllipsisText
                text={heroData[currentHero].description}
                maxLines={3}
              />
              <div style={{ display: "flex", gap: 4 }}>
                <Button
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  size={"large"}
                  ghost
                  style={{
                    border: "1px solid #fff",
                    fontWeight: 600,
                    color: "#fff",
                    width: "300px",
                    height: "50px",
                    fontSize: "20px",
                    marginTop: "10px",
                  }}
                  className="hero-btn-hover"
                >
                  Watch Now
                </Button>
                <Button
                  type="primary"
                  icon={<HeartOutlined />}
                  size={"large"}
                  ghost
                  style={{
                    border: "1px solid #fff",
                    fontWeight: 600,
                    color: "#fff",
                    height: "50px",
                    fontSize: "20px",
                    marginTop: "10px",
                    width: "50px",
                  }}
                  className="hero-btn-hover"
                />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, padding: 42 }}>
            <SoundOutlined
              style={{
                fontSize: "20px",
                color: "#fff",
                opacity: isMuted ? 0.5 : 1,
                background: "rgba(255,255,255,0.5)",
                padding: "14px",
                borderRadius: "50%",
              }}
              onClick={toggleMute}
            />

            <GiResize
              style={{
                width: 48,
                height: 50,
                fontSize: "20px",
                color: "#fff",
                background: "rgba(255,255,255,0.5)",
                padding: "14px",
                borderRadius: "50%",
                cursor: "pointer",
                opacity: isPIPOn ? 1 : 0.5,
              }}
              onClick={togglePIP}
            />
            {heroData.map((hero, index) => {
              return (
                <img
                  key={index}
                  src={hero.thumbnail}
                  alt={hero.name}
                  style={{
                    width: "100px",
                    objectFit: "cover",
                    height: "50px",
                    borderRadius: 4,
                    aspectRatio: 1,
                    maxWidth: "100%",
                    display: "block",
                    border: currentHero === index ? "2px solid #fff" : "unset",
                    cursor: "pointer",
                  }}
                  className="hero-img-hover"
                  onClick={() => setCurrentHero(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
