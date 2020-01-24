import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Video = (props) => (
    <Layout>
        <Helmet>
            <title>Videos - rpb.world</title>
            <meta name="description" content="Videos Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Video</h1>
                    </header>
                    <iframe width="280" height="315" src="https://www.youtube.com/embed/B-iDUGyx62E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="PC Upgrade" allowfullscreen></iframe>
                    <iframe width="280" height="315" src="https://www.youtube.com/embed/q8jzCvdJzbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="25 Minute logo Illustrator" allowfullscreen></iframe>
                </div>
            </section>
        </div>

    </Layout>
)

export default Video