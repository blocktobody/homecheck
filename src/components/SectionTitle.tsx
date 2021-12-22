import styled from '@emotion/styled';

import Text from './Text';
import Motion from './Motion';

import { BREAK_POINT } from '../styles/global';

const Container = styled.div`
  text-align: center;
  margin-bottom: 80px;

  > *:first-of-type {
    margin-bottom: 10px;

    @media (max-width: ${BREAK_POINT}px) {
      margin-bottom: 8px;
    }
  }

  @media (max-width: ${BREAK_POINT}px) {
    white-space: pre-wrap;
    margin-bottom: 60px;
  }
`;

interface Props {
  subtitle: string;
  title: string;
  isMobile: boolean;
}

function SectionTitle({ subtitle, title, isMobile }: Props) {
  return (
    <Container>
      <Motion duration={0.3}>
        <Text as="h3" size={isMobile ? 20 : 26}>
          {subtitle}
        </Text>
      </Motion>
      <Motion duration={0.4}>
        <Text as="h2" size={isMobile ? 36 : 48}>
          {title}
        </Text>
      </Motion>
    </Container>
  );
}

export default SectionTitle;
