import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import HO from '../../assets/images/ho_hd.gif'

const HonestOats = (props) => (
    <Layout>
        <Helmet>
            <title>Honest Oats - rpb.world</title>
            <meta name="description" content="Project description page for DBike Tracker" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Honest Oats</h1>
                    </header>
                    <p>A website built to clients specification, built using HTML, CSS, JavaScript, integrated <a href="https://shopify.com" target="_blank">Shopify</a> & <a href="https://www.juicer.io/" target="_blank">Juicer</a> for Instagram. Honest Oats was an attempt at a delicious, nutritious breakfast on the go from 3 brazen immigrants. </p>
                    
                    <span className="image main"><img src={HO} alt="screen grab from snm.com" /></span>
                    <ul className="actions">
                                <li><Link to="/portfolio/web" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default HonestOats