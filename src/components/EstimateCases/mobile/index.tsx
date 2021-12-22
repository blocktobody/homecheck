import styled from '@emotion/styled';
import { FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';

import CaseCard from '../CaseCard';
import TotalEstimate from '../TotalEstimate';

import { useMainContext } from '../../../context';

const Container = styled.div`
  margin: 0 -16px;

  .swiper {
    margin-bottom: 60px;
  }

  .swiper-slide {
    width: auto;
  }

  > :last-child {
    margin: 0 auto;
  }
`;

function EstimateCasesMobile() {
  const {
    data: {
      estimate: { cases, totalEstimate },
    },
  } = useMainContext();

  const swiperOptions: SwiperProps = {
    modules: [FreeMode, Autoplay],
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    autoplay: { delay: 6000 },
    loop: true,
    loopedSlides: 4,
    speed: 200,
  };

  return (
    <Container>
      <Swiper {...swiperOptions}>
        {cases.map((card) => (
          <SwiperSlide key={card.title}>
            <CaseCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <TotalEstimate totalEstimate={totalEstimate} />
    </Container>
  );
}

export default EstimateCasesMobile;
