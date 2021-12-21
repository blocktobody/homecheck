import styled from '@emotion/styled';

import CaseCard from '../CaseCard';
import TotalEstimate from '../TotalEstimate';

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

  > :nth-child(2) {
    margin-top: 60px;
  }

  > :nth-child(3) {
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
        {cases.map((card) => (
          <CaseCard key={card.title} card={card} />
        ))}
      </CaseContainer>
      <TotalEstimate totalEstimate={totalEstimate} />
    </Container>
  );
}

export default EstimateCasesDesktop;
