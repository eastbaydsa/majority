import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import './all.scss'

const Layout = ({ bodyClass, children }) => (
  <div>
    <Helmet bodyAttributes={{ class: bodyClass }}>
      <title>East Bay Majority</title>
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
