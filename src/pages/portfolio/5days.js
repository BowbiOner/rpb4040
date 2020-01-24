import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import FiveDays from '../../assets/images/5daysoffont.gif'

const DaysFive = (props) => (
    <Layout>
        <Helmet>
            <title>5 Days of Font - rpb.world</title>
            <meta name="description" content="Project description page for 5 days of font" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>5 Days of Font</h1>
                    </header>
                    <span className="image main"><img src={FiveDays} alt="5 days of font challenge" /></span>
                    <p>The 5 days of font was a good exercise to try broaden my knowledge of fonts. As someone who knows that graphic designers will study fonts IN-DEPTH, it was nice to be able to do consistent work with fonts to see if a developer can improve their of knowledge of fonts.</p>
                    
                    <ul className="actions">
                                <li><Link to="/portfolio/web" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default DaysFive