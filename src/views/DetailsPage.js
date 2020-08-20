import React from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = ({ id }) => {
  return (
    <DetailsTemplate
      title="header"
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi officia consequuntur omnis alias debitis rerum placeat qui optio incidunt, eveniet sit? Culpa adipisci fuga aperiam eum at, sapiente ab!"
      articleUrl="/"
      twitterName="/"
      created="00-00-0000"
      key={id}
      id={id}
    />
  );
};

DetailsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  id: PropTypes.number,
};
DetailsPage.defaultProps = {
  id: 1,
};
export default DetailsPage;
