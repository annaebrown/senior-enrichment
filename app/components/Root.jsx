import React from 'react';
import {Link} from 'react-router';


export default (props) => {
  return (
    <div>
    <Link to={'/campuses'}>
      <h3>All Campuses</h3>
    </Link>
    </div>
    )
}