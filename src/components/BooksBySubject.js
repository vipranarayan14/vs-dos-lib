import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Books } from './Books';

import { sortByTitle } from './../utils/sort-by-title';

export const BooksBySubject = ({ allBooks }) => {
  const { code } = useParams();

  return (
    <div>
      <h3>Books in Subject: {code} </h3>
      <Books
        list={sortByTitle(
          allBooks.filter(book => book['Classification'].startsWith(code))
        )}
      />
    </div>
  );
};

BooksBySubject.propTypes = {
  allBooks: PropTypes.array.isRequired
};