import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import FiveDays from '../assets/images/5daysoffont.gif'
import DBike from '../assets/images/dbiketracker.jpg'
import SNM from '../assets/images/sineadnimhaonaigh.png'
import HO from '../assets/images/ho_hd.png'
import TBM from '../assets/images/tourbusmass.gif'
import SDLC from '../assets/images/rpbsoftware.jpg'
import MnC from '../assets/images/macncheeze.gif'
import GAM from '../assets/images/goodam.gif'
import OnePlus from '../assets/images/neversettle.gif'
// import FunkSoul from '../assets/images/funksoul.gif'
// import VidGif from '../assets/images/vid4rpb.gif'
// import Posters from '../assets/images/posters-dmpt.gif'

const Portfolio = (props) => (
    <Layout>
        <Helmet>
            <title>Portfolio - rpb.world</title>
            <meta name="description" content="Portfolio Page" />
        </Helmet>

        <BannerLanding />
        {/* WEB PORT STARTS  */}
        <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${FiveDays})`}}>
                            <header className="major">
                                <h3>5 Days of Font</h3>
                                <p>HTML, CSS, GoogleFonts challenge to build something that highlighted multiple Google Fonts</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/5days" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${DBike})`}}>
                            <header className="major">
                                <h3>D Bike Tracker</h3>
                                <p>Final year project from <a href="http://iadt.ie">IADT</a>. This was built by Aaron O Hare & I. Our initial aim was to build an Android Application that dealt with real time data using Cordova.</p>
                            </header>
                            <Link to="/portfolio/dbike" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${SNM})`}}>
                            <header className="major">
                                <h3>Sinéad Ní Mhaonaigh</h3>
                                <p>A Wordpress build for the very impressive Irish artist Sinéad Ní Mhaonaigh <a href="https://sineadnimhaonaigh.com" target="_blank" rel="noopener noreferrer">sineadnimhaonaigh</a>. A very talented artist and Gaeilgeoir (fluent Irish speaker) from the town of Bray, Co. Wicklow.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/snm" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${HO})`}}>
                            <header className="major">
                                <h3>Honest Oats</h3>
                                <p>A build using HTML, CSS, JavaScript. Integrated Shopify for eCommerce & Juicer for a Instagram feed.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/honestoats" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${TBM})`}}>
                            <header className="major">
                                <h3>Tour Bus Massacre</h3>
                                <p>A companion website for a Java CRUD application from second year of university. Built using HTML, CSS & JavaScript. There is a fully functioning PHP version that uses the same DB as the Java app.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/tbm" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${SDLC})`}}>
                            <header className="major">
                                <h3>Software Development Life Cycle</h3>
                                <p>My first Wordpress build. Running through all the steps of the SDLC, from user roles, design, implementation & testing.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/sdlc" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${MnC})`}}>
                            <header className="major">
                                <h3>Mac N Cheese</h3>
                                <p>A HTML, CSS 960 grid from 2014.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/macncheese" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${GAM})`}}>
                            <header className="major">
                                <h3>GO:OD AM</h3>
                                <p>A HTML, CSS 960 grid from 2014, using a song from the Late Great Mac Miller's GO:OD AM.</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/goodam" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${OnePlus})`}}>
                            <header className="major">
                                <h3>Never Settle</h3>
                                <p>A HTML, CSS 960 grid from 2014, using the OnePlus 2. Now I'm on the OnePlus 6</p>
                            </header>
                            {/* need to change landing to a portfolio page with more info */}
                            <Link to="/portfolio/neversettle" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Rory P. Boyle</h2>
                            </header>
                            <p>A tech enthusiast for the past 19 years, from the original gameboy, crt monitors, loading Doom from a floppy disk to now trying to produce more digital media that will hopefully inspire someone to become a creator. Follow the journey with me if you will.</p>
                            <ul className="actions">
                                <li><Link to="/" className="button next">Portfolio</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
            {/* WEB PORT ENDS */}
        
    </Layout>
)

export default Portfolio