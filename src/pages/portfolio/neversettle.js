import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import NS from '../../assets/images/neversettle.gif'

const NeverSettle = (props) => (
    <Layout>
        <Helmet>
            <title>GO:OD AM - rpb.world</title>
            <meta name="description" content="Project description page for GO:OD AM" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Never Settle - 960 Grid</h1>
                    </header>
                    <p>
                    A HTML, CSS 960 grid from 2014, showcasing the OnePlus 2. in 2020 I have a OnePlus 6 and they are gonna keep churning them out.
                        <br/>
                        <br/>
                        <a href="https://oneplus.net/" target="_blank">Never Settle?</a>
                    </p>
                    
                    <span className="image main"><img src={NS} alt="gif of the webpage working" /></span>
                    <ul className="actions">
                                <li><Link to="/portfolio/web" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default NeverSettle