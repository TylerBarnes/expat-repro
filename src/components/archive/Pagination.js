import React from 'react';
import { Link } from 'gatsby';

import { PaginationWrapper } from './styles/PaginationStyles';

const Pagination = ({ catSlug, page, totalPages }) => (
  <>
    <PaginationWrapper>
      {page > 1 ? (
        <Link
          to={`/blogs/${catSlug}/${page === 2 ? '' : page - 1}/`}
          className="navBack"
        >
          Previous
        </Link>
      ) : (
        <div />
      )}
          <h3> Current - page {page} / {totalPages}</h3>

      {page < totalPages ? (
        <Link to={`/blogs/${catSlug}/${page + 1}/`} className="navForward">
          Next
        </Link>
      ) : (
        <div />
      )}
    </PaginationWrapper>

  </>
);

export default Pagination;
