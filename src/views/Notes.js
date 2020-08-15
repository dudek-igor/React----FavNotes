import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Notes = ({ notes }) => {
  return (
    <GridViewTemplate>
      {notes.map(({ title, content, created, id }) => (
        <Card cardType="notes" title={title} content={content} created={created} key={id} id={id} />
      ))}
    </GridViewTemplate>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});
Notes.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  notes: PropTypes.array,
};
Notes.defaultProps = {
  notes: [],
};
export default connect(mapStateToProps)(Notes);
