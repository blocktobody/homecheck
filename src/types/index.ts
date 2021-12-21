export enum CONTENT_TYPE {
  DONGHENG = 'DONGHENG',
  INTERIOR = 'INTERIOR',
}

export type ContentType = typeof CONTENT_TYPE[keyof typeof CONTENT_TYPE];
