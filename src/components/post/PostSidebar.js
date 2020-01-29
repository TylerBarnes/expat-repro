/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';

import AuthorIcon from '../../images/tango-author-icon.svg';
import CategoryIcon from '../../images/tango-category-icon.svg';
import DateIcon from '../../images/tango-date-icon.svg';

import { SidebarWrapper, SidebarMenu } from './styles/PostSidebarStyles';

const PostSidebar = ({ date, author, categories }) => (
  <SidebarWrapper className="col-lg-3">
    <SidebarMenu>
      <li className="sidebar-menu-header">
        <img src={DateIcon} alt="expatguideturkey-date" />
        <span>{date}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={AuthorIcon} alt="expatguideturkey-author" />
        <span>{author}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={CategoryIcon} alt="expatguideturkey-category" />
        <span>Categories</span>
      </li>
      {categories.map(cat =>
        cat.slug !== 'blog' ? (
          <li key={cat.id}>
            <Link to={`/blogs/${cat.slug}/`}>
              <span dangerouslySetInnerHTML={{ __html: cat.name }} />
            </Link>
          </li>
        ) : null
      )}
    </SidebarMenu>
  </SidebarWrapper>
);

export default PostSidebar;
