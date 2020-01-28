import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import SNM from '../../assets/images/sineadnimhaonaigh.png'

const SNMPage = (props) => (
    <Layout>
        <Helmet>
            <title>Sinéad Ní Mhaonaigh - rpb.world</title>
            <meta name="description" content="Project description page for Sinéad Ní Mhaonaigh " />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Sinéad Ní Mhaonaigh</h1>
                    </header>
                    <span className="image main"><img src={SNM} alt="screen grab from snm.com" /></span>
                    <p>A Wordpress build for the very impressive Irish artist Sinéad Ní Mhaonaigh<a href="https://sineadnimhaonaigh.com" target="_blank" rel="noopener noreferrer">Sinéad Ní Mhaonaigh</a>. A very talented artist and Gaeilgeoir (fluent Irish speaker) from the town of Bray, Co. Wicklow.

She wanted a clean design and a gallery for her works. Achár was her last exhibition. </p>
                    
                    <ul className="actions">
                                <li><Link to="/portfolio/web" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default SNMPage