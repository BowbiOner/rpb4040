import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import MnC from '../../assets/images/macncheeze.gif'

const MACnCheese = (props) => (
    <Layout>
        <Helmet>
            <title>Software Development Life Cycle - rpb.world</title>
            <meta name="description" content="Project description page for SDLC" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Mac and Cheese - 960 Grid</h1>
                    </header>
                    <p>
                        A class project that was to build a simple site using the 960 grid system in HTML & CSS.
                        <br/>
                        <br/>
                        <a href="https://www.macmillerswebsite.com/" target="_blank" rel="noopener noreferrer">RIP Mac Miller</a>
                    </p>
                    
                    <span className="image main"><img src={MnC} alt="gif of the webpage working" /></span>
                    <ul className="actions">
                                <li><Link to="/portfolio/web" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default MACnCheese