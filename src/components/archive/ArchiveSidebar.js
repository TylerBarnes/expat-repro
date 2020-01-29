/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';

import tangoMail from '../../images/tango-mail-icon.svg';
import tangoPage from '../../images/tango-page-icon.svg';

import { SidebarWrapper, SidebarMenu } from './styles/ArchiveSidebarStyles';

const ArchiveSidebar = ({ catId, categories }) => {
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === 'blogs') return -1;
    if (y.node.slug === 'blogs') return 1;
    return 0;
  });

  return (
    <SidebarWrapper className="col-lg-3">
      <SidebarMenu>
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="tango-page" />
          <span>Blog Posts</span>
        </li>

        {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== 'okategoriserade' ? (
              <li
                key={cat.node.id}
                className={cat.node.id === catId ? 'sidebar-highlighted' : null}
              >
                <span className="count">{cat.node.count}</span>
                {cat.node.id === catId ? (
                  <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                ) : (
                  <Link to={`/blogs/${cat.node.slug}/`}>
                    <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                  </Link>
                )}
              </li>
            ) : null;
          }
          return null;
        })}

        <li className="sidebar-menu-header">
          <div style={{ marginTop: '40px' }}>
            <img src={tangoMail} alt="expatguideturkey-page" />
            <span>Mail list</span>
          </div>
        </li>
        <p>
          Do you want to get updated when we publish new blog posts?
          <br />
          Just email us with your name, companyname and mail adress{' '}
          <a href="mailto:info@expatguideturkey.com">Expat Guide Turkey</a>
        </p>
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default ArchiveSidebar;
