import styled from '@emotion/styled';

import SectionTitle from '../components/SectionTitle';
import EstimateCases from '../components/EstimateCases';

import { useMainContext } from '../context';
import { BREAK_POINT } from '../styles/global';

const Section = styled.section`
  width: 1060px;
  margin: 0 auto 240px;

  @media (max-width: ${BREAK_POINT}px) {
    width: calc(100% - 32px);
    margin-bottom: 200px;
  }
`;

const Content = styled.div``;

function Estimate() {
  const {
    data: {
      estimate: { subtitle, title },
    },
    isMobile,
  } = useMainContext();

  return (
    <Section id="estimate">
      <SectionTitle subtitle={subtitle} title={title} isMobile={isMobile} />
      <Content>
        {isMobile ? <EstimateCases.Mobile /> : <EstimateCases.Desktop />}
      </Content>
    </Section>
  );
}

export default Estimate;
