import Image from 'next/image';
import {FC} from 'react';
import HeroImg from '@/assets/imgs/profilepict.svg';
import OverlayMenu from '@/components/Hero/OverlayMenu';

const Index: FC = () => {
  return (
    <div className='hero w-[1440px] h-[100vh] relative bg-[#c7d0d9] flex justify-center align-end'>
      <OverlayMenu />
      <Image className= 'max-w-[70%]' src={HeroImg} alt="hero" />
    </div>
  );
}

export default Index;