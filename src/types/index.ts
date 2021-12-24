export enum CONTENT_TYPE {
  DONGHENG = 'dongheng',
  INTERIOR = 'interior',
}

export type ContentType = typeof CONTENT_TYPE[keyof typeof CONTENT_TYPE];

export interface CaseCardData {
  subtitle: string;
  title: string;
  receipt: {
    title: string;
    items: string[];
    totalPrice: string;
  };
}

export interface TotalEstimateCardData {
  subtitle: string;
  title: string;
  points: string[];
  receipt: {
    title: string;
    items: {
      text: string;
      price: string;
    }[];
    totalPrice: string;
  };
}

export interface BenefitCardData {
  subtitle: string;
  title: string;
  text: string;
  imagePath: string;
}

export interface Data {
  main: {
    subtitle: string;
    title: string;
    points: {
      label: string;
      text: string;
    }[];
  };
  estimate: {
    subtitle: string;
    title: string;
    cases: CaseCardData[];
    totalEstimate: TotalEstimateCardData;
  };
  benefit: {
    subtitle: string;
    title: string;
    cards: BenefitCardData[];
  };
  caution: {
    title: string;
    bullets: {
      title: string;
      contents: string[];
    }[];
    refs: string[];
  };
  button: {
    info: {
      text: string;
      linkUrl: string;
    };
    event: {
      text: string;
      linkUrl: string;
    };
  };
}
