import styled from '@emotion/styled';

const Image = styled.img<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  object-fit: cover;
`;

export default Image;
