import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import 'modern-normalize/modern-normalize.css'
import './all.scss'

const Layout = ({ bodyClass, children }) => (
  <div className="majority">
    <Helmet bodyAttributes={{ class: bodyClass }}>
      <title>East Bay Majority</title>

      <link rel="icon" type="image/png" href="/favicon.ico" />

      <meta
        name="description"
        content="News for the East Bay's diverse, working-class majority. A publication by the East Bay Chapter of the Democratic Socialists of America."
      />

      <meta
        name="google-site-verification"
        content="kB_f4HWcQtu3pvQxjI5bJVO7PNqbEIQb006RLpAtphQ"
      />

      <meta property="og:site_name" content="East Bay Majority" />
      <meta property="og:url" content="https://eastbaymajority.com" />
      <meta property="og:type" content="website" />

      <link
        href="https://fonts.googleapis.com/css?family=Anton"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Rasa:400,500,600"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
