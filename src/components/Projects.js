import React from 'react'
import { images } from '../assets/img'
import Layout from './Layout'

function Projects() {
    return (
        <Layout>
            <section className="section4" id="projects">
                <h2 className="title">My Recent Works</h2>
                <div className="project-container">

                    <div className="project-card">
                        <div className="top">
                            <img src={images.projectImg} alt="project" width="100%" />
                        </div>
                        <div className="bottom">
                            <div className="icons">
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-react"></i>
                            </div>
                            <p>Portfolio with React</p>
                            <p>Nov 1, 2023</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="top">
                            <img src={images.projectImg} alt="project" width="100%" />
                        </div>
                        <div className="bottom">
                            <div className="icons">
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-react"></i>
                            </div>
                            <p>Portfolio with React</p>
                            <p>Nov 1, 2023</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="top">
                            <img src={images.projectImg} alt="project" width="100%" />
                        </div>
                        <div className="bottom">
                            <div className="icons">
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-react"></i>
                            </div>
                            <p>Portfolio with React</p>
                            <p>Nov 1, 2023</p>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="top">
                            <img src={images.projectImg} alt="project" width="100%" />
                        </div>
                        <div className="bottom">
                            <div className="icons">
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-react"></i>
                            </div>
                            <p>Portfolio with React</p>
                            <p>Nov 1, 2023</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="top">
                            <img src={images.projectImg} alt="project" width="100%" />
                        </div>
                        <div className="bottom">
                            <div className="icons">
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-react"></i>
                            </div>
                            <p>Portfolio with React</p>
                            <p>Nov 1, 2023</p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="top">
                            <img src={images.projectImg} alt="project" width="100%" />
                        </div>
                        <div className="bottom">
                            <div className="icons">
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-react"></i>
                            </div>
                            <p>Portfolio with React</p>
                            <p>Nov 1, 2023</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Projects