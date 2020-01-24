import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import GAM from '../../assets/images/goodam.gif'

const GoodAM = (props) => (
    <Layout>
        <Helmet>
            <title>GO:OD AM - rpb.world</title>
            <meta name="description" content="Project description page for GO:OD AM" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>GO:OD AM - 960 Grid</h1>
                    </header>
                    <p>
                    A HTML, CSS 960 grid from 2014, using a song from the Late Great Mac Miller's GO:OD AM.
                        <br/>
                        <br/>
                        <a href="https://www.macmillerswebsite.com/" target="_blank">RIP Mac Miller</a>
                    </p>
                    
                    <span className="image main"><img src={GAM} alt="gif of the webpage working" /></span>
                    <ul className="actions">
                                <li><Link to="/portfolio/web" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default GoodAM