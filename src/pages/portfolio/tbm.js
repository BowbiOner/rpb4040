import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import TBM from '../../assets/images/tourbusmass.gif'

const TourBus = (props) => (
    <Layout>
        <Helmet>
            <title>Tour Bus Massacre - rpb.world</title>
            <meta name="description" content="Project description page for Tour Bus Massacre" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Tour Bus Massacre</h1>
                    </header>
                    <p>A companion website for a Java CRUD application from second year of university. Built using HTML, CSS & JavaScript. There is a fully functioning PHP version that uses the same DB as the Java app.</p>
                    
                    <span className="image main"><img src={TBM} alt="gif of the app working" /></span>
                    <ul className="actions">
                                <li><Link to="/portfolio/" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default TourBus