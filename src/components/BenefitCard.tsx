import styled from '@emotion/styled';

import Text from './Text';
import Image from './Image';

import { BenefitCardData } from '../types';
import { BREAK_POINT } from '../styles/global';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 335px;
  height: 475px;
  background-color: #f5f5f5;
  padding: 35px 32px 0;
  border-radius: 8px;
  white-space: pre-wrap;
  overflow: hidden;

  > :nth-child(1) {
    width: fit-content;
    background-color: var(--primary);
    padding: 6px 20px;
    margin: 0 auto;
  }

  @media (max-width: ${BREAK_POINT}px) {
    height: auto;
  }
`;

const Title = styled.h4`
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.6px;
  margin: 20px 0;

  > span {
    color: var(--primary);
  }
`;

const ImageContainer = styled.div`
  width: calc(100% + 64px);
  height: 162px;
  margin: auto -32px 0;

  @media (max-width: ${BREAK_POINT}px) {
    margin-top: 32px;
  }
`;

interface Props {
  card: BenefitCardData;
}

function BenefitCard({ card }: Props) {
  const { subtitle, title, text, imagePath } = card;

  return (
    <Container>
      <Text weight={600}>{subtitle}</Text>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Text color="black" weight={400} size={18} lineHeight="1.5">
        {text}
      </Text>
      <ImageContainer>
        <Image src={imagePath} width={335} height={163} alt={subtitle} />
      </ImageContainer>
    </Container>
  );
}

export default BenefitCard;
