import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import SDLC from '../../assets/images/rpbsoftware.jpg'

const Software = (props) => (
    <Layout>
        <Helmet>
            <title>Software Development Life Cycle - rpb.world</title>
            <meta name="description" content="Project description page for SDLC" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Software Development Life Cycle</h1>
                    </header>
                    <p>A continuous assessment from year 2 of university. A basic CRUD application written in Java partnered this project.
                        <br /> 
                        The objective was to work through the requirements of the software being built, the roles that would be needed through the software, the design of said software, implementing the software that you have just outlined and then (drum roll please) the best part of the life cycle... TESTING YAY!</p>

                        <a href="https://roryplunkettboyle2016.wordpress.com" target="_blank">Software Development Life Cycle - Rory Plunkett Boyle</a>
                    
                    <span className="image main"><img src={SDLC} alt="gif of the app working" /></span>
                    <ul className="actions">
                                <li><Link to="/portfolio/web" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Software