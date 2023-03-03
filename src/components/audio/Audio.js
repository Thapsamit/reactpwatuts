import AudioPlayer from "react-h5-audio-player";

const Audio = () => {
  return (
    <AudioPlayer
      src="https://api.still.ag/media/level1/audios/day-3.mp3"
      customAdditionalControls={[]}
      customVolumeControls={[]}
      showJumpControls={true}
      layout="stacked-reverse"
      progressJumpSteps={{
        forward: 0,
        backward: 10000,
      }}
      hasDefaultKeyBindings={false}
    />
  );
};

export default Audio;
