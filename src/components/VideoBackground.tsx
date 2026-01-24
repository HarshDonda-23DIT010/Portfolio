import portfolioVideo from '@/assets/portfolio.mp4';

interface VideoBackgroundProps {
  onVideoLoaded?: () => void;
}

const VideoBackground = ({ onVideoLoaded }: VideoBackgroundProps) => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={onVideoLoaded}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={portfolioVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default VideoBackground;
