import styled from '@emotion/styled';

import Text from '../components/Text';

import { useMainContext } from '../context';
import { BREAK_POINT } from '../styles/global';

const Section = styled.section`
  width: 100vw;
  height: 830px;
  background-color: #f5f5f5;
  padding-top: 100px;

  > h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  @media (max-width: ${BREAK_POINT}px) {
    height: auto;
    padding-top: 60px;
    padding-bottom: 150px;
  }
`;

const Content = styled.ul`
  width: 625px;
  margin: 0 auto;

  > p {
    margin-bottom: 6px;
  }

  @media (max-width: ${BREAK_POINT}px) {
    width: calc(100% - 32px);
  }
`;

const Bullet = styled.li`
  display: flex;
  align-items: flex-start;

  :not(:last-of-type) {
    margin-bottom: 8px;
  }
  :last-of-type {
    margin-bottom: 12px;
  }

  > p {
    flex-shrink: 0;
    margin-right: 4px;
  }
`;

const BulletContent = styled.div`
  white-space: pre-wrap;

  @media (max-width: ${BREAK_POINT}px) {
    white-space: normal;
  }
`;

function Caution() {
  const {
    data: {
      caution: { title, bullets, refs },
    },
    isMobile,
  } = useMainContext();

  return (
    <Section id="caution">
      <Text as="h2" color="primary" size={isMobile ? 36 : 48}>
        {title}
      </Text>
      <Content>
        {bullets.map(({ title, contents }) => (
          <Bullet key={title}>
            <Text
              color="black"
              lineHeight="1.5"
              weight={400}
            >{`▶ ${title}: `}</Text>
            <BulletContent>
              {contents.map((content) => (
                <Text key={content} color="black" lineHeight="1.5" weight={400}>
                  {content}
                </Text>
              ))}
            </BulletContent>
          </Bullet>
        ))}
        {refs.map((ref) => (
          <Text key={ref} color="black" lineHeight="1.5" weight={400}>
            {`* ${ref}`}
          </Text>
        ))}
      </Content>
    </Section>
  );
}

export default Caution;
