import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function VideoOverlay() {
  return (
    <Container>
      <Overlay />
      <Video src="/video.mp4" autoPlay loop muted playsInline />
    </Container>
  );
}

export default VideoOverlay;
