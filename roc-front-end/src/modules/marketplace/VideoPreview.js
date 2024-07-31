import { Title } from "components";

const VideoPreview = ({ url }) => {
  return (
    <div className="hidden md:block space-y-3">
      <Title className={"pt-2 pb-4"}>VIDEO PREVIEW</Title>
      <div className="rounded-2xl overflow-hidden">
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={url || "https://www.youtube.com/embed/TDHuoXpCkls"}
            width={"100%"}
            height={"450px"}
            title="Youtube video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
