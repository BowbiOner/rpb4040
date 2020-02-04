import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

// import FiveDays from '../assets/images/5daysoffont.gif'
// import DBike from '../assets/images/dbiketracker.jpg'
// import SNM from '../assets/images/sineadnimhaonaigh.png'
// import HO from '../assets/images/ho_hd.png'
// import TBM from '../assets/images/tourbusmass.gif'
// import SDLC from '../assets/images/rpbsoftware.jpg'
import FunkSoul from '../assets/images/funksoul.gif'
import VidGif from '../assets/images/vid4rpb.gif'
import Posters from '../assets/images/posters-dmpt.gif'

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
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Creative Computing</h2>
                    </header>
                    <p>I have a BSc. in Creative Computer from <a href="https://www.iadt.ie/courses/creative-computing" target="_blank" rel="noopener noreferrer">IADT</a>. The course was amazing the lecturers really provided an in-depth look into all the technologies covered. 
                    We were not limited to just programming / web development with study a wide range of digital media production techniques.
                    <h4>Technologies covered</h4>
                    <ul>
                        <li>HTML, CSS & JavaScript</li>
                        <li>PHP & MySQL</li>
                        <li>Advanced Javascript & NoSQL</li>
                        <li>Computer Hardware & OS Architecture</li>
                        <li>Digital Media Entrepreneurship</li>
                        <li>Adobe Master Suite</li>
                        <li>3DS MAXX</li>
                        <li>Java & Android Development</li>
                    </ul></p>
                    <p>So now I hope to share the fruits of that labour with the world, hopefully I can inspire someone as <a href="https://taniarascia.com" target="_blank" rel="noopener noreferrer">Tania Rascia</a> has inspired me.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/portfolio/web" className="image">
                        <img src={FunkSoul} alt="a gif of a site i built for rap albums" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Web</h3>
                            </header>
                            <p>A collection of web works by yours truly, from HTML, CSS, PHP & JS.</p>
                            <ul className="actions">
                                <li><Link to="/portfolio/web" className="button">See more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/portfolio/video" className="image">
                        <img src={VidGif} alt="snapshots of videos ive edited" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Videos</h3>
                            </header>
                            <p>I will post a collection of videos I have fully completed and edited here. These are by far the worst bits of work I have lol.</p>
                            <ul className="actions">
                                <li><Link to="/portfolio/video" className="button">See more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/portfolio/ill-photos" className="image">
                        <img src={Posters} alt="posters I made for a local sport club events (no money made)" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Photoshop & Illustrator</h3>
                            </header>
                            <p>This will be where all the illustrations and photo edits I have done over the past 6 years here. Feel free to let me know what you think (be brutal).</p>
                            <ul className="actions">
                                <li><Link to="/portfolio/ill-photos" className="button">See more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

            </Layout>
        )
    }
}

export default HomeIndex