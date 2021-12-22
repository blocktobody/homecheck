import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { Container, Line, ReceiptTitle, Title, TotalPrice } from './shared';

import Text from '../Text';
import Image from '../Image';

import { CaseCardData } from '../../types';

const Content = styled.div`
  position: relative;
  width: 200px;
  height: 240px;
`;

const ImageContainer = styled.div<{ show: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 98%;
  top: 0;
  left: 0;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity ease-in-out 250ms;
`;

const Receipt = styled.div<{ imagePath: string; show: boolean }>`
  width: calc(100% + 14px);
  height: calc(100% + 16px);
  background-image: url(${({ imagePath }) => imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 35px 22px 40px 25px;
  margin: -6px -5px -10px -9px;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity ease-in-out 250ms;

  > p {
    color: #8f8f8f;
    margin-bottom: 6px;
  }

  > hr {
    margin: 14px 0 8px;
  }
`;

interface Props {
  card: CaseCardData;
}

function CaseCard({ card }: Props) {
  const {
    subtitle,
    title,
    receipt: { title: receiptTitle, items, totalPrice },
    imagePath,
  } = card;

  const [showPhoto, setShowPhoto] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timer = useRef<any>(null);

  function handleSetTimeout(value: boolean) {
    timer.current = setTimeout(() => {
      setShowPhoto(!value);
    }, 4000);
  }

  function handleClearTimeout() {
    clearTimeout(timer.current);
    timer.current = null;
  }

  useEffect(() => {
    handleSetTimeout(showPhoto);

    return () => handleClearTimeout();
  }, [showPhoto]);

  return (
    <Container>
      <Title>
        <Text color="primary" weight={600}>
          {subtitle}
        </Text>
        <Text as="h4" color="black" size={24}>
          {title}
        </Text>
      </Title>
      <Content>
        <ImageContainer show={showPhoto}>
          <Image src={imagePath} alt={receiptTitle} loading="lazy" />
        </ImageContainer>
        <Receipt imagePath="/receipt-container.png" show={!showPhoto}>
          <ReceiptTitle>
            <Text color="black" weight={600}>
              {receiptTitle}
            </Text>
            <Line />
          </ReceiptTitle>
          {items.map((item) => (
            <Text key={item} weight={400}>
              {item}
            </Text>
          ))}
          <Line />
          <TotalPrice>
            <Text color="black" weight={600}>
              총
            </Text>
            <Text color="primary" size={20}>
              {totalPrice}
            </Text>
          </TotalPrice>
        </Receipt>
      </Content>
    </Container>
  );
}

export default CaseCard;
