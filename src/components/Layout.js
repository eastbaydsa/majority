import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
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
  </div>
)

export default TemplateWrapper
