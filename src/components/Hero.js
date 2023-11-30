import React from 'react'
import { images } from '../assets/img'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Layout from './Layout'

function Hero() {
    return (
        <>
            <Layout>
                <section className="section1" id="hero">
                    <div className="hero">
                        <div className="left">
                            <div className="name">Hi, I am Kiran Gautam</div>
                            <div className="tag">Software Engineer</div>
                            <div className="sub-tag">I love coding and teaching</div>
                            <a href={images.projectImg} download>
                                <button>
                                    Download CV
                                    <i className="fa-solid fa-download"></i>
                                </button>
                            </a>
                        </div>
                        <div className="right">
                            <img src={images.userImg} alt="User" />
                        </div>
                    </div>
                </section>
                <Banner />
            </Layout>
        </>
    )
}

export default Hero