import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Articles = ({ articles }) => {
  return (
    <GridViewTemplate pageType="articles">
      {articles.map(({ title, content, articleUrl, created, id }) => (
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
Articles.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array,
};
Articles.defaultProps = {
  articles: [],
};
export default connect(mapStateToProps)(Articles);
