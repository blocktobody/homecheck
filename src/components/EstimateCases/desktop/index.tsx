import styled from '@emotion/styled';

import CaseCard from '../CaseCard';
import TotalEstimate from '../TotalEstimate';

import Motion from '../../Motion';

import { useMainContext } from '../../../context';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

const CaseContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  > *:nth-of-type(2) {
    margin-top: 60px;
  }

  > *:nth-of-type(3) {
    margin-top: -60px;
  }
`;

function EstimateCasesDesktop() {
  const {
    data: {
      estimate: { cases, totalEstimate },
    },
  } = useMainContext();

  return (
    <Container>
      <CaseContainer>
        {cases.map((card, index) => (
          <Motion key={card.title} duration={index / 2 + 0.3}>
            <CaseCard card={card} />
          </Motion>
        ))}
      </CaseContainer>
      <TotalEstimate totalEstimate={totalEstimate} />
    </Container>
  );
}

export default EstimateCasesDesktop;
