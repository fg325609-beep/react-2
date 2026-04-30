import React from "react"
import "./Hero.scss"

function Hero(){
    return(
        <>
        <section>
            <div className="container">
                <div className="hero">
                    <div className="left">
                        <span></span>
                        <h1>Humanizingyour insurance.</h1>
                        <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                         <a href="">VIEW PLANS</a>
                    </div>
                    <div className="right">
                        <img src="img/hero.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Hero;