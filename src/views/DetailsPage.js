import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

const DetailsPage = ({ match, title, content, articleUrl, twitterName, created, id }) => {
  const [pageType, setPageType] = useState('notes');
  useEffect(() => {
    switch (match.path) {
      case routes.note:
        setPageType('notes');
        break;
      case routes.twitter:
        setPageType('twitters');
        break;
      case routes.article:
        setPageType('articles');
        break;
      default:
        break;
    }
  });
  return (
    <DetailsTemplate
      pageType={pageType}
      title={title}
      content={content}
      articleUrl={articleUrl}
      twitterName={twitterName}
      created={created}
      key={id}
      id={id}
    />
  );
};

DetailsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
  id: PropTypes.number.isRequired,
};
DetailsPage.defaultProps = {
  articleUrl: '',
  twitterName: '',
};
export default DetailsPage;
