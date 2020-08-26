import React from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { withContext } from 'hoc/withContext';
import { connect } from 'react-redux';

const DetailsPage = ({ activeItem }) => {
  const [item] = activeItem;
  return (
    <DetailsTemplate
      title={item.title}
      content={item.content}
      articleUrl="/"
      twitterName="/"
      created={item.created}
      key={item.id}
      id={item.id}
    />
  );
};

DetailsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  activeItem: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // eslint-disable-next-line no-underscore-dangle
  activeItem: state[ownProps.pageContext].filter((item) => item._id === ownProps.match.params.id),
});
export default withContext(connect(mapStateToProps)(DetailsPage));
