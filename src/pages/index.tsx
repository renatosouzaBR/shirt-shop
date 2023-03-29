import Image from "next/image";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import shirt1 from '@/assets/shirts/shirt1.png';
import shirt2 from '@/assets/shirts/shirt2.png';
import shirt3 from '@/assets/shirts/shirt3.png';

import { HomeContainer, ProductContainer } from "@/styles/pages/home";

export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 1.8,
        spacing: 48,
      },
    }
  )

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <ProductContainer className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductContainer>
      
      <ProductContainer className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductContainer>
      
      <ProductContainer className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductContainer>
    </HomeContainer>
  )
}