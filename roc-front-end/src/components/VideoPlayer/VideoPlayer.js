import { useEffect, useRef } from "react";

function VideoPlayer(props) {
  const { width, height } = props;
  const cloudinaryRef = useRef();
  const videoRef = useRef();
  useEffect(() => {
    if (cloudinaryRef.current) return;
    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "colbycloud-examples",
    });
  }, []);

  return (
    <video
      ref={videoRef}
      data-cld-public-id="videos/waterfall"
      width={width}
      height={height}
      controls
    />
  );
}

export default VideoPlayer;
