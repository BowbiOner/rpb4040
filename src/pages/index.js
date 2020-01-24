import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import FiveDays from '../assets/images/5daysoffont.gif'
import DBike from '../assets/images/dbiketracker.jpg'
import SNM from '../assets/images/sineadnimhaonaigh.png'
import HO from '../assets/images/ho_hd.png'
import TBM from '../assets/images/tourbusmass.gif'
import SDLC from '../assets/images/rpbsoftware.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Digital World of RPB"
                    meta={[
                        { name: 'description', content: 'Rory Plunkett Boyle portfolio' },
                        { name: 'keywords', content: 'Web Developer, Tech Enthusiast, IT Man, PC Builder, Gamer' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${FiveDays})`}}>
                            <header className="major">
                                <h3>5 Days of Font</h3>
                                <p>HTML, CSS, GoogleFonts challenge to build something that highlighted multiple Google Fonts 2015</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${DBike})`}}>
                            <header className="major">
                                <h3>D Bike Tracker</h3>
                                <p>Final year project from <a href="http://iadt.ie">IADT 2017</a>. This was built by Aaron O Hare & I. Our initial aim was to build an Android Application that dealt with real time data using Cordova.</p>
                            </header>
                            <Link to="/portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${SNM})`}}>
                            <header className="major">
                                <h3>Sinéad Ní Mhaonaigh</h3>
                                <p>A Wordpress build for the very impressive Irish artist Sinéad Ní Mhaonaigh <a href="https://sineadnimhaonaigh.com">sineadnimhaonaigh</a>. A very talented artist and Gaeilgeoir (fluent Irish speaker) from the town of Bray, Co. Wicklow.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${HO})`}}>
                            <header className="major">
                                <h3>Honest Oats</h3>
                                <p>A build using HTML, CSS, JavaScript. Integrated Shopify for eCommerce & Juicer for a Instagram feed.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${TBM})`}}>
                            <header className="major">
                                <h3>Tour Bus Massacre</h3>
                                <p>A companion website for a Java CRUD application from 2015. Built using HTML, CSS & JavaScript. There is a fully functioning PHP version that uses the same DB as the Java app.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${SDLC})`}}>
                            <header className="major">
                                <h3>Software Development Life Cycle</h3>
                                <p>My first Wordpress build. Running through all the steps of the SDLC, from user roles, design, implementation & testing.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Rory P. Boyle</h2>
                            </header>
                            <p>A tech enthusiast for the past 19 years, from the original gameboy, crt monitors, floppy disk Doom to now trying to produce more digital media that will hopefully inspire someone to become a creator. Follow the journey with me if you will.</p>
                            <ul className="actions">
                                <li><Link to="/portfolio" className="button next">Portfolio</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex