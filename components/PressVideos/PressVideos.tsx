// COMPONENTS
import Container from "../Container/Container";
import Video from "./../Video/Video";

const MACSF = "https://teamdoc.fr/video/MACSF.mp4";
const SSC = "https://teamdoc.fr/video/SSC.mp4";
const TEAMDOC = "https://teamdoc.fr/video/TeamDoc.mp4";
const MACSFIMG = "images/press/video/MACSFIMG.jpg";
const SSCIMG = "images/press/video/SSC.jpg";
const CAIH = "images/press/video/CAIH.jpg";

const PressVideos = () => {
  const videos = [
    {
      url: MACSF,
      cover: MACSFIMG,
    },
    {
      url: SSC,
      cover: SSCIMG,
    },
    {
      url: TEAMDOC,
      cover: CAIH,
    },
  ];

  return (
    <Container>
      <div className="pressVideos">
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
    </Container>
  );
};

export default PressVideos;
