import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config';


export default class Index extends React.Component {
  render () {

    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Hello World!
        </h1>
        <p>Welcome to your new clean Gatsby site</p>
        <Link to={prefixLink('/portfolio/crocs/')}>Crocs</Link>
        <Link to={prefixLink('/markdown/')}>Markdown</Link>
        <h5>Bootstrap tests</h5>
        <button>Hello Btn here</button>
          <div id="fullpage">
            <div className="section">Some section</div>
            <div className="section">Some section</div>
            <div className="section">Some section</div>
            <div className="section">Some section</div>
        </div>
      </div>
    )
  }
}
