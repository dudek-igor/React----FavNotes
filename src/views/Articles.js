import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import { fetchItems } from 'data/actions';

const Articles = ({ fetchArticles, articles }) => {
  useEffect(() => {
    fetchArticles();
    return () => fetchArticles;
  }, [fetchArticles]);
  return (
    <GridViewTemplate pageType="articles">
      {articles.map(({ title, content, articleUrl, created, _id: id }) => (
        <Card
          cardType="articles"
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
          id={id}
        />
      ))}
    </GridViewTemplate>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});
const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});
Articles.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array,
  fetchArticles: PropTypes.func.isRequired,
};
Articles.defaultProps = {
  articles: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
