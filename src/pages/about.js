import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import KonaRpb from '../assets/images/kona-rpb.jpg'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>About - rpb.world</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About</h1>
                    </header>
                    
                    <p>I am Web Developer that hails from the Emerald Isle.
                        <br/>
                        <br/>
I have been chopping and changing so much about my web presence and just so afraid to commit. I am finally getting the courage to do my thing. 
<br/>
<br/>
I am an avid cyclist, who loves a good laugh. I am trying to be more open sharing some of the creative things I have made so check back in if you want to see more :)
<br/>
<br/>
Here is a pic of my two wheels and I. 
<span className="image main"><img src={KonaRpb} alt="piccy with my bike" /></span>
</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default About