import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecomendedPosts from "../components/RecomendedPosts"

 

const success = () => (
  <Layout>
    <SEO title="Thank You" />
 
 <div
  data-sal="fade"
  data-sal-delay="300"
  data-sal-easing="ease"
>
<div class="jumbotron text-center">
    <h1>Thank You!</h1>
    <p class="lead"><strong>We have recieved your enquiry</strong> one of our consultant will be in contact with you shortly.</p>
    <hr></hr>
    <p>Based on your interest in our services, you'll probably find below posts informative as well:</p>
</div>
</div>


  <RecomendedPosts />
  </Layout>
)

export default success
