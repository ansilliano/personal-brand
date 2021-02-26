import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import MenuItem from './MenuItem';
import 'swiper/components/navigation/navigation.scss';
import Arrow from './Arrow';

const MenuWork = ({ items, icons, path }) => {
  SwiperCore.use(Navigation);
  return (
    <div className='menu-work'>
      <div className='arrow-up'>
        <Arrow deg='90' />
      </div>
      <Swiper
        direction='vertical'
        slidesPerView={3}
        slidesPerGroup={3}
        loop='true'
        navigation={{
          prevEl: '.arrow-up',
          nextEl: '.arrow-down',
        }}
      >
        {items.map(({ color, Children, id }) => (
          <SwiperSlide>
            <MenuItem
              key={id}
              id={id}
              color={color}
              icon={icons[Children]}
              path={path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='arrow-down'>
        <Arrow deg='180deg' />
      </div>
    </div>
  );
};

export default MenuWork;
