/* eslint-disable no-useless-catch */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { withContext } from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

const DetailsPage = ({ activeItem, match }) => {
  const [item, setItem] = useState();
  useEffect(() => {
    if (!activeItem) {
      axios.get(`http://localhost:9000/api/note/${match.params.id}`).then(({ data }) => {
        setItem(data);
      });
    } else {
      const [data] = activeItem;
      setItem(data);
    }
  }, [activeItem, match]);

  return (
    <>
      {item && (
        <DetailsTemplate
          title={item.title}
          content={item.content}
          articleUrl="/"
          twitterName="/"
          created={item.created}
          key={item.id}
          id={item.id}
        />
      )}
    </>
  );
};

DetailsPage.propTypes = {
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        // eslint-disable-next-line no-underscore-dangle
        (item) => item._id === ownProps.match.params.id,
      ),
    };
  }
  return {
    activeItem: '',
  };
};
export default withContext(connect(mapStateToProps)(DetailsPage));
