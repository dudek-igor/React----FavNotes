import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import { fetchItems } from 'data/actions';

const Notes = ({ fetchNotes, notes }) => {
  useEffect(() => {
    fetchNotes();
    return () => {
      fetchNotes();
    };
  }, [fetchNotes]);
  return (
    <GridViewTemplate>
      {notes.map(({ title, content, created, _id: id }) => (
        <Card cardType="notes" title={title} content={content} created={created} key={id} id={id} />
      ))}
    </GridViewTemplate>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});
const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});
Notes.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  notes: PropTypes.array,
  fetchNotes: PropTypes.func.isRequired,
};
Notes.defaultProps = {
  notes: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
