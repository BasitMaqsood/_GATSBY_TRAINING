import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutUS = () => {
    return (
        <Layout>
            <h1>About Us</h1>
            <p>This is my Professional WEbsite</p>
            <Link to="/"> &lrr; back to Home</Link>
        </Layout>
    );
}

export default AboutUS;