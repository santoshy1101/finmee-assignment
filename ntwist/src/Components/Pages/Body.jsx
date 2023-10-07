import React, { useEffect } from 'react'
import style from './Body.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Body = () => {
  //  animation
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <div className={style.container}>
        {/*  mine to mill optimization */}
        <div
          className={style.container1}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={style.container2}>
            <h1>Mine-To-Mill-To-Mine Optimization</h1>
            <div className={style.text}>
              <p>
                NTWIST's newest product unlocks up to $250/oz in previously
                inaccessible value in open pit gold mines by connecting siloed
                data sources like block models, fleet management systems,
                stockpile surveys, and plant instruments. This allows your
                company to better track material flow, and feed properties,
                identify plan/production discrepancies, and correct resource
                models and production plans.
              </p>
              <button className={style.button}>Read More</button>
            </div>
          </div>
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-768x512.jpg"
            className={style.images}
            alt=""
          />
        </div>
        {/********************  sustanibality********************* */}
        <div
          className={style.cont1}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
            className={style.images}
            alt=""
          />
          <div
            className={style.cont2}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Sustainability</h1>
            <div className={style.text}>
              <p>
                Environmental stewardship is a priority for NTWIST. We help our
                customers to minimize their sustainability impact on the planet.
                Emissions or environmental targets are used alongside
                productivity targets to define success for our customers.
              </p>
              <p>
                With the increasing relevance of carbon accounting and emissions
                tracking, NTWIST offers a suite of tools to increase visibility
                into environmental performance and help processing plants track,
                manage, optimize, and report key metrics.
              </p>
              <button className={style.button}>Read More</button>
            </div>
          </div>
        </div>
        {/* *********************mineral processing************************ */}
        <div
          className={style.container1}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={style.container2}>
            <h1>Mineral Processing</h1>
            <div className={style.text}>
              <p>
                NTWIST offers a number of solutions for mills, concentrators,
                and leach plants. Our solutions help operations to reduce the
                effect of feed variability, avoid downtime, and increase peak
                throughput while decreasing energy and reagent consumption.
              </p>
              <button className={style.button}>Read More</button>
            </div>
          </div>
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/dominik-vanyi-Mk2ls9UBO2E-unsplash-2048x1365.jpg"
            className={style.images}
            alt=""
          />
        </div>
        {/*********************  oil and gas ************* */}
        <div
          className={style.cont1}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
            className={style.images}
            alt=""
          />
          <div className={style.cont2}>
            <h1>Oil & Gas</h1>
            <div className={style.text}>
              <p>
                NTWIST helps Oil & Gas customers to analyze historical data,
                identify opportunities for process control improvements, and
                reduce variability in any part of the process, thus providing
                enhanced reliability and safety.
              </p>
              <button className={style.button}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
