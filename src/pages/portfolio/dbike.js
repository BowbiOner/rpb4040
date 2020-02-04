import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import DBike from '../../assets/images/dbiketracker.jpg'
import GifBike from "../../assets/images/dbike.gif"

const BikeD = (props) => (
    <Layout>
        <Helmet>
            <title>D Bike Tracker - rpb.world</title>
            <meta name="description" content="Project description page for DBike Tracker" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>DBike Tracker</h1>
                    </header>
                    <span className="image main"><img src={DBike} alt="" /></span>
                    <p>dBikeTracker is an Android application compiled from HTML, CSS and JavaScript code through Cordova. This allows the use of native device API’s and will allow the application to be easily transferred between platforms. The backend is built through PHP and is hosted on Heroku. It allows the user to view real time information on the stations available through the Dublin Bike Scheme through interaction with the map or a search for a specific station. This data is provided by the JCDecaux API and is updated in real time. It also allows the user to conduct a predictive search, providing them with reliable statistical data on future availability based on a date/time they have searched.  This data is provided by an SQL database that we have built and maintained over the past few months, pulling data from the JCDecaux API every ten minutes. This data is queried based on the users search and ran through our predictive model which removes outlier data and generates a mean and standard deviation. This allows us to present the user with an estimated number of available bikes as well as an accuracy rating on this data. The application will also suggest alternative stations to the user based on their current location, using Androids native location services functionality and the Google Distance Matrix API. </p>
                    <img src={GifBike} alt="gif of the application DBikeTracker working" />
                    <ul className="actions">
                                <li><Link to="/portfolio/" className="button next">Web Portfolio</Link></li>
                            </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default BikeD