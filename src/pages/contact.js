import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactMePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact me" />
        <h1>This is my contact info</h1>
        <Link style={{ color: `white` ,background:`black`, padding:"5px", margin:"5px"}}  to={"www.fb.com/"}>
                  {"Facebook"}
        </Link>
        <Link style={{ color: `white` ,background:`black`, padding:"5px", margin:"5px"}} to={"www.twitter.com/"}>
                  {"Twitter"}
        </Link>
        <Link style={{ color: `white` ,background:`black`, padding:"5px", margin:"5px"}} to={"www.linkedin.com/"}>
                  {"LinkedIn"}
        </Link>
        <Link style={{ color: `white` ,background:`black`, padding:"5px", margin:"5px"}} to={"www.instagram.com/"}>
                  {"Instagram"}
        </Link>
      </Layout>
    )
  }
}

export default ContactMePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`