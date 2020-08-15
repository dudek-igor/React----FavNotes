import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Twitter = ({ twitters }) => {
  return (
    <GridViewTemplate pageType="twitters">
      {twitters.map(({ title, content, twitterName, created, id }) => (
        <Card
          cardType="twitters"
          title={title}
          content={content}
          twitterName={twitterName}
          created={created}
          key={id}
          id={id}
        />
      ))}
    </GridViewTemplate>
  );
};
const mapStateToProps = (state) => ({
  twitters: state.twitters,
});
Twitter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  twitters: PropTypes.array,
};
Twitter.defaultProps = {
  twitters: [],
};
export default connect(mapStateToProps)(Twitter);
