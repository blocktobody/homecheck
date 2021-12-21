export enum CONTENT_TYPE {
  DONGHENG = 'dongheng',
  INTERIOR = 'interior',
}

export type ContentType = typeof CONTENT_TYPE[keyof typeof CONTENT_TYPE];

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
    cases: {
      subtitle: string;
      title: string;
      receipt: {
        title: string;
        items: string[];
        totalPrice: string;
      };
    }[];
    totalEstimate: {
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
    };
  };
  benefit: {
    subtitle: string;
    title: string;
    cards: {
      subtitle: string;
      title: string;
      text: string;
    }[];
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
