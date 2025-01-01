"use client"
import React from 'react'
import styles from './Testimonials.module.css'
<<<<<<< HEAD
import { caveatFont} from '@/font'
=======
import { caveatFont } from '@/font'
>>>>>>> bdcd48b5b383c2abaf8100bdfd363119e0c71a0d
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import TestimonialCard from './testimonial-card/TestimonialCard'


function Testimonial() {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])
  return (
    <>

        <section id='testimonial' className={styles.testimonials}>
            <h1 className={caveatFont.className}><span>W</span>hat {" "}
            <span>O</span>ther {" "}
            <span>P</span>eople {" "}
            <span>S</span>ay</h1>

            <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>

             <TestimonialCard/>

            </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial


