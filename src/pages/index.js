import * as React from "react"
import Seo from "../components/seo"


const IndexPage = () => (
 <h1> Hello</h1>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
