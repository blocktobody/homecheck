import styled from '@emotion/styled';

import Text, { TextColor } from './Text';
import Image from './Image';

import { useMainContext } from '../context';
import { BREAK_POINT } from '../styles/global';

const Container = styled.div`
  position: fixed;
  width: 1000px;
  height: 80px;
  bottom: 10px;
  left: calc(50% - 500px);
  z-index: 10;

  @media (max-width: ${BREAK_POINT}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 120px;
    bottom: 0;
    left: 0;
  }
`;

const Button = styled.a<{ color: TextColor }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: ${({ color }) => `var(--${color})`};

  > p {
    margin-right: 12px;
  }

  @media (max-width: ${BREAK_POINT}px) {
    width: 100%;
    height: 60px;
  }
`;

function FixedButtons() {
  const {
    data: {
      button: { info, event },
    },
    isMobile,
  } = useMainContext();

  return (
    <Container>
      <Button
        color="black"
        href={info.linkUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Text size={isMobile ? 16 : 26}>{info.text}</Text>
        <Image
          src="/arrow.png"
          width={isMobile ? 8 : 12}
          height={isMobile ? 16 : 24}
          alt="arrow"
        />
      </Button>
      <Button
        color="primary"
        href={event.linkUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Text size={isMobile ? 16 : 26}>{event.text}</Text>
        <Image
          src="/arrow.png"
          width={isMobile ? 8 : 12}
          height={isMobile ? 16 : 24}
          alt="arrow"
        />
      </Button>
    </Container>
  );
}

export default FixedButtons;
