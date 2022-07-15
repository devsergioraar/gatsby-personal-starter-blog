import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSlider from 'gatsby-image-background-slider'

class CatGalleryPage extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="I like cats!" />
                <p>Check out my favorite cat pictures!</p>

                <section style={{width:"400px",display:"flex",justifyContent:"center"}}>
                <BackgroundSlider
                    query={data}
                    initDelay={1} // delay before the first transition (if left at 0, the first image will be skipped initially)
                    transition={1} // transition duration between images
                    duration={2} // how long an image is shown
                    // specify images to include (and their order) according to `relativePath`
                    images={["souls.jpg", "coon.jpg", "tiger.jpg", "kitten.jpg"]}

                    // pass down standard element props
                    style={{
                        transform: "rotate(-2deg) scale(.9)",
                        width:"300px",
                        height:"300px",
                        position:"relative",
                        "z-index":"1",
                        overflown:"hidden"
                        
                        
                    }}
                >
                    {/* Captions in sync with background images*/}
                    <div>Darks!</div>
                    <div>Big Meow</div>
                    <div>Roar</div>
                    <div>Little Meow</div>
                    <>{/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}</>
                     
                    
                </BackgroundSlider>

                </section>
            </Layout>

            
        )
    }
}

export default CatGalleryPage
 

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
        nodes{
          relativePath
          childImageSharp {
            fluid (maxWidth: 400, quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  }

  
`
 
