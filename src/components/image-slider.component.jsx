import { useEffect, useRef, useState } from "react";
import aot from "../assets/thumbnails/aot.jpg";
import bc from "../assets/thumbnails/bc.jpg";
import bleach from "../assets/thumbnails/bleach.jpg";
import dfrag from "../assets/thumbnails/dfrag.jpg";
import drs from "../assets/thumbnails/drs.jpg";
import ds from "../assets/thumbnails/ds.jpg";
import fma from "../assets/thumbnails/fma.jpg";
import gintama from "../assets/thumbnails/gintama.jpg";
import jjk from "../assets/thumbnails/jjk.jpg";
import konosuba from "../assets/thumbnails/konosuba.jpg";
import mha from "../assets/thumbnails/mha.jpg";
import opm from "../assets/thumbnails/opm.jpeg";
import sao from "../assets/thumbnails/sao.jpg";
import sds from "../assets/thumbnails/sds.jpg";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { EllipsisText } from "./Ellipsis.component";
const TRANSLATE_AMOUNT = 200;
export const ImageSlider = ({ headerContent, headerStyles }) => {
  const aot_trailer = "src/assets/trailers/thumbnail-trailers/aot.mp4";
  const bc_trailer = "src/assets/trailers/thumbnail-trailers/bc.mp4";
  const bleach_trailer = "src/assets/trailers/thumbnail-trailers/bleach.mp4";
  const dfrag_trailer = "src/assets/trailers/thumbnail-trailers/dfrag.mp4";
  const drs_trailer = "src/assets/trailers/thumbnail-trailers/drs.mp4";
  const ds_trailer = "src/assets/trailers/thumbnail-trailers/ds.mp4";
  const fma_trailer = "src/assets/trailers/thumbnail-trailers/fma.mp4";
  const gintama_trailer = "src/assets/trailers/thumbnail-trailers/gintama.mp4";
  const jjk_trailer = "src/assets/trailers/thumbnail-trailers/jjk.mp4";
  const konosuba_trailer =
    "src/assets/trailers/thumbnail-trailers/konosuba.mp4";
  const mha_trailer = "src/assets/trailers/thumbnail-trailers/mha.mp4";
  const opm_trailer = "src/assets/trailers/thumbnail-trailers/opm.mp4";
  const sao_trailer = "src/assets/trailers/thumbnail-trailers/sao.mp4";
  const sds_trailer = "src/assets/trailers/thumbnail-trailers/sds.mp4";

  const [currentThumbnailTrailer, setCurrentThumbnailTrailer] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef(null);
  const trailerRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const thumbnailData = [
    {
      name: "Attack on Titan",
      thumbnail_image: aot,
      thumbnail_video: aot_trailer,
      release_date: "2013",
      total_seasons: 4,
      IMDb_rating: "9.1",
      thumbnail_description:
        "Humankind constructs lofty walls to safeguard itself from immense creatures, the Titans. It battles to regain its land captured by the Titans which is not easy.",
    },
    {
      name: "Black Clover",
      thumbnail_image: bc,
      thumbnail_video: bc_trailer,
      release_date: "2017",
      total_seasons: 4,
      IMDb_rating: "8.1",
      thumbnail_description:
        "Asta and Yuno were abandoned together at the same church and have been inseparable since. When they received their Grimoires at age 15, Yuno got a spectacular book with a four-leaf clover, while Asta received nothing at all.",
    },
    {
      name: "Bleach",
      thumbnail_image: bleach,
      thumbnail_video: bleach_trailer,
      release_date: "2004",
      total_seasons: 16,
      IMDb_rating: "8.1",
      thumbnail_description:
        "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers and is tasked with protecting the living world from dark spirits known as Hollows.",
    },
    {
      name: "D-Frag!",
      thumbnail_image: dfrag,
      thumbnail_video: dfrag_trailer,
      release_date: "2014",
      total_seasons: 1,
      IMDb_rating: "7.6",
      thumbnail_description:
        "Kazama Kenji likes to believe he is something of a delinquent. Moreover, others seem to like to agree that he is. Of course, Kenji's gang finds their way to a group of four not-so-normal girls—Chitose, Sakura, Minami, and Roka—and all at once, whatever reputation he may have is nothing compared to the outrageous behavior of the girls.",
    },
    {
      name: "Dr. Stone",
      thumbnail_image: drs,
      thumbnail_video: drs_trailer,
      release_date: "2019",
      total_seasons: 2,
      IMDb_rating: "8.1",
      thumbnail_description:
        "Several thousand years after a mysterious phenomenon that turns all of humanity to stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens. Facing a world of stone and the total collapse of civilization, Senku makes up his mind to use science to rebuild the world.",
    },
    {
      name: "Demon Slayer",
      thumbnail_image: ds,
      thumbnail_video: ds_trailer,
      release_date: "2019",
      total_seasons: 2,
      IMDb_rating: "8.7",
      thumbnail_description:
        "Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, board the Infinity Train on a new mission with the Flame Pillar, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    },
    {
      name: "Fullmetal Alchemist",
      thumbnail_image: fma,
      thumbnail_video: fma_trailer,
      release_date: "2003",
      total_seasons: 2,
      IMDb_rating: "9.0",
      thumbnail_description:
        "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    },
    {
      name: "Gintama",
      thumbnail_image: gintama,
      thumbnail_video: gintama_trailer,
      release_date: "2006",
      total_seasons: 10,
      IMDb_rating: "9.0",
      thumbnail_description:
        "The Amanto, aliens from outer space, have invaded Earth and taken over feudal Japan. As a result, a prohibition on swords has been established, and the samurai of Japan are treated with disregard as a consequence.",
    },
    {
      name: "Jujutsu Kaisen",
      thumbnail_image: jjk,
      thumbnail_video: jjk_trailer,
      release_date: "2020",
      total_seasons: 1,
      IMDb_rating: "8.7",
      thumbnail_description:
        "Yuuji Itadori is a high school student with exceptional physical abilities. On the night his grandfather dies, his life takes a turn for the worse when he encounters a cursed object and unseals a dark power. Now, he's drawn into the world of curses and sorcery, and must confront the dark forces threatening humanity.",
    },
    {
      name: "Konosuba",
      thumbnail_image: konosuba,
      thumbnail_video: konosuba_trailer,
      release_date: "2016",
      total_seasons: 2,
      IMDb_rating: "8.0",
      thumbnail_description:
        "Kazuma Satou, a shut-in and die-hard fan of games, anime, and manga, is killed in a traffic accident. His soul is sent to a fantasy world where he forms a dysfunctional party with a goddess, a wizard, and a crusader. Together, they embark on comedic adventures filled with chaos and hilarity.",
    },
    {
      name: "My Hero Academia",
      thumbnail_image: mha,
      thumbnail_video: mha_trailer,
      release_date: "2016",
      total_seasons: 6,
      IMDb_rating: "8.5",
      thumbnail_description:
        "In a world where nearly every human has some form of superpower, or `quirk,` young Izuku Midoriya stands out for lacking one. After a chance encounter with the hero All Might, Izuku inherits his quirk and enrolls in a prestigious hero academy to pursue his dream of becoming a great hero.",
    },
    {
      name: "One Punch Man",
      thumbnail_image: opm,
      thumbnail_video: opm_trailer,
      release_date: "2015",
      total_seasons: 2,
      IMDb_rating: "8.8",
      thumbnail_description:
        "Saitama, a hero who can defeat any opponent with a single punch, is bored by the lack of challenge in his fights. Despite being incredibly powerful, he yearns for a worthy adversary. Joining the Hero Association, he seeks to find meaning and excitement in his hero career.",
    },
    {
      name: "Sword Art Online",
      thumbnail_image: sao,
      thumbnail_video: sao_trailer,
      release_date: "2012",
      total_seasons: 4,
      IMDb_rating: "7.6",
      thumbnail_description:
        "In the year 2022, players find themselves trapped in the virtual reality MMORPG Sword Art Online. If they die in the game, they die in real life. Kirito, one of the players, must navigate the dangers of the game to escape and free the other players.",
    },
    {
      name: "Seven Deadly Sins",
      thumbnail_image: sds,
      thumbnail_video: sds_trailer,
      release_date: "2014",
      total_seasons: 5,
      IMDb_rating: "8.1",
      thumbnail_description:
        "When the Seven Deadly Sins, a group of legendary knights, are accused of conspiring to overthrow the kingdom, they disband. Ten years later, Princess Elizabeth sets out to find them and enlist their help to save the kingdom from corruption and tyranny.",
    },
  ];
  const nextSlide = () => {
    setTranslate((prev) => {
      if (containerRef.current === null) return translate;
      const newTranslate = prev + TRANSLATE_AMOUNT;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;
      console.log("edge", edge, "width", width);
      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  };

  const prevSlide = () => {
    setTranslate((prev) => {
      const newTranslate = prev - TRANSLATE_AMOUNT;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  };

  useEffect(() => {
    if (containerRef.current === null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0].target;

      if (container === null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [translate]);

  const handleThumbnailLeave = () => {
    setCurrentThumbnailTrailer(null);
    setIsVideoLoaded(false);
  };

  const handleThumbnailEnter = (index) => {
    setCurrentThumbnailTrailer(index);
    if (trailerRef.current) {
      trailerRef.current.currentTime = 0;
      trailerRef.current.load();
    }
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div style={{ background: "#f5f5f5" }}>
      <div style={{ margin: "20px 40px" }}>
        <h2 style={headerStyles}>{headerContent}</h2>
        <div style={{ display: "flex", position: "relative", marginTop: 12 }}>
          {isLeftVisible && (
            <button className="arrows" onClick={prevSlide}>
              <LeftOutlined />
            </button>
          )}
          <div className="slider-container">
            <div
              className="image-wrapper"
              style={{
                transform: `translateX(-${translate}px)`,
                transition: "transform 0.3s ease-in-out", // Add transition
              }}
              ref={containerRef}
            >
              {thumbnailData.map((thumbnail, index) => (
                <div
                  key={index}
                  className="image-container"
                  style={{ cursor: "pointer" }}
                  onMouseLeave={() => handleThumbnailLeave()}
                >
                  <img
                    className="slide"
                    src={thumbnail.thumbnail_image}
                    alt={`slide-${index}`}
                    style={{ position: "relative", cursor: "pointer" }}
                    onMouseEnter={() => handleThumbnailEnter(index)}
                  />
                  <div
                    className="video-overlay"
                    style={{
                      visibility:
                        currentThumbnailTrailer === index
                          ? "visible"
                          : "hidden",
                      transition: "opacity 0.3s ease-in-out",
                      marginLeft: currentThumbnailTrailer === 0 ? "15%" : 0,
                      backgroundImage: `url(${
                        isVideoLoaded ? "" : thumbnail.thumbnail_image
                      })`,
                      backgroundPosition: "50% 50%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <video
                      key={currentThumbnailTrailer}
                      src={thumbnail.thumbnail_video}
                      alt={thumbnail.thumbnail_image}
                      autoPlay
                      muted
                      loop
                      ref={trailerRef}
                      onLoadedData={handleVideoLoaded}
                      style={{
                        opacity: isVideoLoaded ? 1 : 0, // Add opacity transition
                        transition: "opacity 0.3s ease-in-out", // Add transition
                      }}
                    />
                    {isVideoLoaded && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                          padding: 8,
                          opacity: 1, // Add opacity transition
                          transition: "opacity 0.3s ease-in-out", // Add transition
                        }}
                      >
                        <h4 style={{ color: "#fff" }}>{thumbnail.name}</h4>
                        <h5
                          style={{
                            color: "#fff",
                            fontWeight: "600",
                            letterSpacing: 1,
                          }}
                        >
                          {thumbnail.release_date} • IMDb{" "}
                          {thumbnail.IMDb_rating} • {thumbnail.total_seasons}{" "}
                          Seasons
                        </h5>
                        <EllipsisText
                          text={thumbnail.thumbnail_description}
                          maxLines={3}
                          styles={{ fontSize: "10px" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isRightVisible && (
            <button
              className="arrows"
              onClick={nextSlide}
              style={{
                right: 0,
              }}
            >
              <RightOutlined />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
