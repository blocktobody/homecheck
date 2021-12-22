import styled from '@emotion/styled';

import SectionTitle from '../components/SectionTitle';
import BenefitCard from '../components/BenefitCard';
import Motion from '../components/Motion';

import { useMainContext } from '../context';
import { BREAK_POINT } from '../styles/global';

const Section = styled.section`
  width: 1060px;
  margin: 0 auto 160px;

  @media (max-width: ${BREAK_POINT}px) {
    width: calc(100% - 32px);
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
  }
`;

function Benefit() {
  const {
    data: {
      benefit: { subtitle, title, cards },
    },
    isMobile,
  } = useMainContext();

  return (
    <Section id="benefit">
      <SectionTitle subtitle={subtitle} title={title} isMobile={isMobile} />
      <CardContainer>
        {cards.map((card, index) => (
          <Motion key={card.title} duration={index / 2 + 0.3}>
            <BenefitCard card={card} />
          </Motion>
        ))}
      </CardContainer>
    </Section>
  );
}

export default Benefit;
