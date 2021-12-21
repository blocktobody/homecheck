import styled from '@emotion/styled';

import Text from '../components/Text';
import Image from '../components/Image';

import { useMainContext } from '../context';
import { BREAK_POINT } from '../styles/global';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1060px;
  height: 100vh;
  padding-top: 30px;
  margin: 0 auto 180px;

  @media (max-width: ${BREAK_POINT}px) {
    width: calc(100% - 32px);
    padding-top: 20px;
  }
`;

const Logo = styled.a`
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 240px;

  @media (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
`;

const Title = styled.div`
  margin: 20px 142px 0 0;

  > *:first-of-type {
    margin-bottom: 12px;
  }

  @media (max-width: ${BREAK_POINT}px) {
    white-space: pre-wrap;
    text-align: center;
    margin: 0 0 20px;
  }
`;

const Points = styled.ul``;

const Point = styled.li`
  display: flex;
  align-items: center;

  :not(:last-of-type) {
    margin-bottom: 20px;

    @media (max-width: ${BREAK_POINT}px) {
      margin-bottom: 12px;
    }
  }
`;

const Label = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: var(--white);
  border-radius: 50%;
  margin-right: 20px;

  > p {
    position: absolute;
    width: 100%;
    text-align: center;
    top: calc(50% - 12px);
    left: 0;
  }

  @media (max-width: ${BREAK_POINT}px) {
    width: 60px;
    height: 60px;

    > p {
      top: calc(50% - 10px);
    }
  }
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto auto 120px;

  > :nth-child(1) {
    animation: ani-affordance 2.5s 80ms infinite;
  }

  > :nth-child(2) {
    animation: ani-affordance 2.5s infinite;
    margin-top: -10px;
  }

  @keyframes ani-affordance {
    0% {
      transform: translate3d(0, 0, 0);
      animation-timing-function: cubic-bezier(0.33, 0, 0.3, 1);
    }
    13% {
      transform: translate3d(0, 10px, 0);
      animation-timing-function: cubic-bezier(0.33, 0, 0.3, 1);
    }
    27% {
      transform: translate3d(0, 0, 0);
      animation-timing-function: cubic-bezier(0.33, 0, 0.3, 1);
    }
    40% {
      transform: translate3d(0, 10px, 0);
      animation-timing-function: cubic-bezier(0.33, 0, 0.3, 1);
    }
    53% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const ArrowContainer = styled.div``;

function Main() {
  const {
    data: {
      main: { subtitle, title, points },
    },
    isMobile,
  } = useMainContext();

  return (
    <Section id="main">
      <Logo
        href="http://www.homecheck.kr"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          src="/logo.png"
          width={isMobile ? 140 : 180}
          height={isMobile ? 32 : 40}
          alt={title}
        />
      </Logo>
      <Container>
        <Title>
          <Text as="h2" size={isMobile ? 18 : 30}>
            {subtitle}
          </Text>
          <Text as="h1" size={isMobile ? 46 : 60}>
            {title}
          </Text>
        </Title>
        <Points>
          {points.map(({ label, text }) => (
            <Point key={text}>
              <Label>
                <Text color="black" size={isMobile ? 16 : 20}>
                  {label}
                </Text>
              </Label>
              <Text size={isMobile ? 18 : 24}>{text}</Text>
            </Point>
          ))}
        </Points>
      </Container>
      <ScrollIndicator>
        <ArrowContainer>
          <Image src="/arrow.svg" width={42} height={20} alt="arrow" />
        </ArrowContainer>
        <ArrowContainer>
          <Image src="/arrow.svg" width={42} height={20} alt="arrow" />
        </ArrowContainer>
      </ScrollIndicator>
    </Section>
  );
}

export default Main;
