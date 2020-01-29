import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import archiveTemplate from "../templates/archive"


const IndexPage = () => (
<Layout>

    <SEO title="Home" />
   
<archiveTemplate />    
 </Layout>
)

export default IndexPage
