/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

export type TextColor = 'primary' | 'secondary' | 'black' | 'white';

export interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'css'> {
  as?: string;
  color?: TextColor;
  size?: number;
  weight?: number;
  lineHeight?: string;
  children: ReactNode;
}

export default function Text(props: TextProps) {
  const {
    as = 'p',
    color = 'white',
    size = 16,
    weight = 700,
    lineHeight = '1.2',
    className,
    children,
    ...restProps
  } = props;

  const Component = styled(as as any)`
    color: var(--${color});
    font-size: ${size}px;
    font-weight: ${weight};
    line-height: ${lineHeight};
    letter-spacing: -0.6px;
  `;

  return (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  );
}
