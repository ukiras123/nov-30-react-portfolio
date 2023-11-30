import React from 'react'
import { images } from '../assets/img'

function AboutMe() {
    return (
        <section className="section5" id="about">
            <section className="about-me">
                <h2 className="title">About me</h2>
                <div className="about-container">
                    <div className="left">
                        <img src={images.userImg} alt="" width="60%" />
                    </div>
                    <div className="right">
                        <h2>Kiran Gautam</h2>
                        <p className="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a quia aliquid architecto? Quisquam neque voluptatem vitae. Excepturi sapiente expedita rerum, laudantium eos, odio, aperiam quasi vero soluta eligendi praesentium!</p>

                        <div className="interest-container">
                            <div className="tag">
                                <h2>Interests</h2>
                            </div>
                            <div className="interests">
                                <span>Coding</span>
                                <span>Football</span>
                                <span>Movies</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default AboutMe