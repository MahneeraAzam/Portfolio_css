'use client'
import React from 'react'
import styles from "./AboutBottomImage.module.css"
import Image from "next/image";
import {motion} from "framer-motion"


// parent
const containerVariants = {
  hidden:{}, 
  show:{
    transition:{
      staggerChildren: 0.2
    }
  }
}

// Children

const itemVariants = {
  hidden:{opacity: 0, y:20},
  show:{opacity: 1, y:0}
}

function AboutBottomImage() {
  return (
    <>
    <motion.section className={styles.aboutBottomImage}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    
    >
      
        <motion.div variants={itemVariants}><Image src={'/html.png'} alt={"html Pic"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}
        ><Image src={'/css.png'} alt={"css Pic"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}
        ><Image src={'/typescript.png'} alt={"typescript Pic"} width={70} height={70}></Image></motion.div>
        <motion.div variants={itemVariants}
        ><Image src={'/git.png'} alt={"git Pic"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}
        ><Image src={'/figma.png'} alt={"figma Pic"} width={96} height={96}></Image></motion.div>
       <motion.div variants={itemVariants}
       > <Image src={'/react.png'} alt={"react Pic"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}
        ><Image src={'/next.png'} alt={"next Pic"} width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVariants}
        ><Image src={'/node.png'} alt={"node Pic"} width={96} height={96}></Image></motion.div>
    </motion.section>
    </>
  )
}

export default AboutBottomImage