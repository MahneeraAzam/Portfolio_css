
import React from 'react'
import Image from 'next/image'
import styles from './TestimonialCard.module.css'
import { interFont } from '@/font'
import { testimonialCards } from '../testimonial'

function TestimonialCard() {
  return (
    <>
    {testimonialCards.map((card, index)=>{return (

         <div className={`${styles.card} ${interFont.className}`} key={index}>
         <div className={styles.cardImg}>
             <Image src={card.src} alt={"text"} width={150} height={150}></Image>
         </div>

         <p>{card.name}</p>
         <p><span>{card.title}</span></p>
         <p style={{marginBottom: "0px"}}>{card.description}</p>
     </div>
    )})}
  
    </>
  )
}

export default TestimonialCard