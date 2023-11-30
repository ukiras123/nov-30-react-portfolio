import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'

function Skills() {
    return (
        <>
            <Layout>
                <section className="section3" id="skills">
                    <div className="skills-container">
                        <div>
                            <i className="fa-brands fa-html5"></i>
                            <div>HTML</div>
                        </div>
                        <div>
                            <i className="fa-brands fa-html5"></i>
                            <div>HTML</div>
                        </div>
                        <div>
                            <i className="fa-brands fa-html5"></i>
                            <div>HTML</div>
                        </div>
                    </div>
                </section>
                <Footer />
            </Layout>
        </>
    )
}

export default Skills