'use client'
import React from 'react'
import styles from './HeroSection.module.css'
import { interFont } from '@/font'
import Button from '../button/Button'
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import Image from "next/image";
import {motion} from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'

function HeroSection() {
  return (
    <>
    <section className={`${styles.hero} ${interFont.className}`}>
        <h1 className=''> Hey! I am {" "}
            <span >Mahneera Azam</span>  
            {" "}
            <motion.span style={{display: "inline-block", fontSize: "50px"}}
               animate={{rotate: [0, 15, -10, 20, -10, 0]}}
               transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}

            >👋</motion.span>

            <br /><span>I</span> am a {" "}
            <Typewriter
            words={[" Front End Web Developer", 'UX UI Designer']}
            loop={Infinity}
            cursor={true}
            cursorStyle={"_"}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
            />
           
        
          </h1>

        <p>I can build user interface for websites and applications with {" "}
            <span>React JS </span> 
            and {" "}<span>Next.js</span>
            <br />I love the front end development</p>

            <Button text={"Hire Me"}/>

            <div className={styles.socialIconsDiv}>
            <FaFacebookF size={30}/>
            <TfiTwitter size={30}/>
            <BsInstagram size={30}/>
            <FaWhatsapp size={30}/>
            <LiaTelegram size={30}/>
            </div>

            <div className={styles.bottomImgDiv}>
                <Image src={"/behance.png"} alt={"behance pic"} width={156} height={156}></Image>
                <Image src={"/dribble.png"} alt={"dribble pic"} width={156} height={156}></Image>
                <Image src={"/upwork.png"} alt={"upwork pic"} width={156} height={156}></Image>
                <Image src={"/freelance.png"} alt={"freelance pic"} width={156} height={156}></Image>
            </div>
    </section>
    </>
  )
}

export default HeroSection