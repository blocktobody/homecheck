import styled from '@emotion/styled';

import { Container, Line, ReceiptTitle, Title, TotalPrice } from './shared';

import Text from '../Text';
import Image from '../Image';

import { TotalEstimateCardData } from '../../types';

const Points = styled.div`
  text-align: center;
  margin: 14px 0 26px;

  > p {
    margin-bottom: 10px;
  }
`;

const Receipt = styled.div<{ imagePath: string }>`
  position: relative;
  width: 280px;
  height: 340px;
  background-image: url(${({ imagePath }) => imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 35px 20px 40px 72px;
  margin: -6px -5px -10px -9px;

  > hr {
    margin: 18px 0 12px;
  }
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > :first-child {
    color: #adadad;
  }

  > :last-child {
    color: var(--secondary);
  }
`;

interface Props {
  totalEstimate: TotalEstimateCardData;
}

function TotalEstimate({ totalEstimate }: Props) {
  const {
    subtitle,
    title,
    points,
    receipt: { title: receiptTitle, items, totalPrice },
  } = totalEstimate;

  return (
    <Container>
      <Title align="center">
        <Text color="secondary">{subtitle}</Text>
        <Text as="h4" color="black" size={24}>
          {title}
        </Text>
      </Title>
      <Points>
        {points.map((point) => (
          <Text key={point} color="black" weight={600}>
            {point}
          </Text>
        ))}
      </Points>
      <Receipt imagePath="/total-receipt-container.png">
        <ReceiptTitle>
          <Text color="black" weight={600}>
            {receiptTitle}
          </Text>
          <Line />
        </ReceiptTitle>
        <Items>
          {items.map(({ text, price }) => (
            <Item key={text}>
              <Text weight={400}>{text}</Text>
              <Text weight={400}>{price}</Text>
            </Item>
          ))}
        </Items>
        <Line />
        <TotalPrice>
          <Text color="black" weight={600}>
            총
          </Text>
          <Text color="secondary" size={24}>
            {totalPrice}
          </Text>
        </TotalPrice>
        <Image src="/barcode.png" width={153} height={28} alt="barcode" />
      </Receipt>
    </Container>
  );
}

export default TotalEstimate;
