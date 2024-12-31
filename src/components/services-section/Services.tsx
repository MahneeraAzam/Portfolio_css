import React from 'react'
import styles from  "./Services.module.css"
import { caveatFont, interFont } from '@/font'
import ServicesCard from './services-card/ServicesCard';

function Services() {
  return (
    <>
        <section id='services' className={styles.services}>
            <h1 className={caveatFont.className}><span>W</span>hat {" "}
                 <span>I</span>  {" "}
                 <span>D</span>o {" "}
                 <span>F</span>or {" "}
                <span>C</span>lients
                 </h1>

                 <p className={interFont.className}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis omnis quam voluptatum debitis voluptatem quibusdam tempore fugiat veritatis praesentium hic optio ipsum, dolores reiciendis aperiam. <br /> Explicabo at unde adipisci, ex deserunt omnis provident, iste voluptate placeat dolor qui quam cumque.</p>

                 <div className={styles.servicesCardDiv}>
                   <ServicesCard/>
                 </div>
        </section>
    </>
  )
}

export default Services