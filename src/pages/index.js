import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Felix Suarez's Site"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0,alignItems:"center" }} src="./picture/felix.jpg" alt="Felix Suarez Face" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my new website. You are on your home page.</p>
        <p>
        Electrical engineer with a specialty in robotics, machine learning, and software development. I hold a master's degree in energy and a master's degree in robotics. I also have a background as a professor at the University of Costa Rica. I have twelve years of coding experience in different languages such as C/C++ and Python. I have supported complex applications used in VLSI design, developed machine learning models, and coded microservices in AWS.
        </p>
        <p>Get in touch for business!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
