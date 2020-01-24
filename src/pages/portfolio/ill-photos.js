import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const IllPhotos = (props) => (
    <Layout>
        <Helmet>
            <title>Ill Photos - rpb.world</title>
            <meta name="description" content="Ill Photos Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Ill Photos</h1>
                    </header>
                    <h2>UNDERGOING SOME MAINTENANCE</h2>
                </div>
            </section>
        </div>

    </Layout>
)

export default IllPhotos