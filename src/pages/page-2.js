import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
 

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
 
 <div
  data-sal="fade"
  data-sal-delay="300"
  data-sal-easing="ease"
>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
</div>
<div
  data-sal="fade"
  data-sal-delay="300"
  data-sal-easing="ease"
>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
</div>



  <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
