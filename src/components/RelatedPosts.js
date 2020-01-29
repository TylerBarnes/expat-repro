import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'


//import './relatedarticles.scss'


const RelatedPosts = ({ posts }) => (
  <section className="sidebar-section">
  <h2 className="section-title separator-below"> Related Posts </h2>
  <section className="section-content">
  <p>Here are a couple of related articles you might enjoy reading.</p>
{/* <ul> */}
{posts.map(({node}) => 
 <p key={node.id}>
 <Link 
 className="custom-link" 
 to={'/blogs${node.link}'}
 >
   {node.title}
 </Link>
</p>
)}
{/* </ul> */}

	
 </section>
</section>
)

export default RelatedPosts