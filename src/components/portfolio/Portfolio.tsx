import React from 'react'
import styles from "./Portfolio.module.css"
import { caveatFont, interFont } from '@/font'
import PortfolioCard from './portfolio-cards/PortfolioCard'

function Portfolio() {
  return (
    <>
    <section id='portfolio' className={styles.portfolio}>
        <h1 className={`${caveatFont.className}`}>
        <span>M</span>y {" "}
        <span>L</span>ast {" "}
        <span>W</span>ork {" "}
        </h1>

        <p className={interFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit eligendi, hic aut suscipit, culpa numquam ad rem perferendis et laboriosam <br />
         atque optio sunt ducimus dolores. Ipsa aspernatur cumque beatae omnis animi odio? Quis officiis nam voluptatibus, facilis quae molestiae?</p>

    <div className={styles.myWork}>
<PortfolioCard/>
    </div>
    </section>
    </>
  )
}

export default Portfolio