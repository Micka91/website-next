// REACT
import { useState, useEffect } from "react";
// LIBS
import ReactPlayer from "react-player";

interface IProps {
  video: {
    url: string;
    cover: string;
  };
}

const Video = ({ video }: IProps) => {
  // PROPS
  const { url, cover } = video;
  // REACT STATE
  const [playerHeight, setPlayerHeight] = useState<number>(450);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 450) {
        setPlayerHeight(250);
      } else setPlayerHeight(450);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <ReactPlayer
        controls
        height={`${playerHeight}px`}
        // playIcon={
        //   <PlayCircleOutlineIcon
        //     style={{ fontSize: "4rem", color: "#29b6f6" }}
        //   />
        // }
        playing
        url={url}
        width="100%"
        light={cover}
      />
    </div>
  );
};

export default Video;
