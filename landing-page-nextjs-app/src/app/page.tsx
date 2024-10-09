import Header from '@/components/Header';
import { FC } from "react";
import Hero from '@/components/Hero/Hero';
import About from '@/components/About';


const Page: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <Portofolio />
      <Gallery />
      <Testimonials />
      <Footer /> */}
    </>
    
  );
}

export default Page;
