import styled from '@emotion/styled';

import Text from './Text';

import { BREAK_POINT } from '../styles/global';

const Container = styled.div`
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 80px;

  > h3 {
    margin-bottom: 10px;

    @media (max-width: ${BREAK_POINT}px) {
      margin-bottom: 8px;
    }
  }

  @media (max-width: ${BREAK_POINT}px) {
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
      <Text as="h3" size={isMobile ? 20 : 26}>
        {subtitle}
      </Text>
      <Text as="h2" size={isMobile ? 36 : 48}>
        {title}
      </Text>
    </Container>
  );
}

export default SectionTitle;
