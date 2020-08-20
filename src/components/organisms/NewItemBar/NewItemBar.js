/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { withContext } from 'hoc/withContext';
import { addItem } from 'data/actions';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';

const StyledWrapper = withContext(styled.div`
  border-left: 10px solid ${({ theme, pageContext }) => theme[pageContext]};
  z-index: 29;
  position: fixed;
  display: flex;
  padding: 80px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: ${({ isVisible }) => (isVisible ? 'translate(0%)' : 'translate(100%)')};
  transition: transform 0.4s ease-in-out;
`);
const StyledTextArea = styled(Input)`
  resize: none;
  margin: 0;
  border-radius: 20px;
  height: 30vh;
  width: 100%;
`;
const StyledInput = styled(Input)`
  width: 100%;
`;
const StyledButton = styled(Button)`
  margin: 5px;
`;
const StyledHeading = styled(Heading)`
  margin-bottom: 10px;
`;

const headShake = keyframes`
    10%, 90% {
    transform: translate3d(0, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`;
const StyledError = styled.div`
  color: red;
  margin: 10px 0;
  transform: translate3d(0, 0, 0);
  ${({ startAnimation }) =>
    startAnimation &&
    css`
      animation: ${headShake} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) reverse 1;
    `}
`;

const NewItemBar = ({ isVisible, setIsVisible, pageContext, addItem }) => {
  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledHeading big>Create new {pageContext} </StyledHeading>
      <Formik
        initialValues={{
          title: '',
          content: '',
          articleUrl: '',
          twitterName: '',
          created: moment(new Date()).format('DD/MM/YYYY'),
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = `Title is required`;
          } else if (!/^[a-zA-Z1-9]{3,}$/i.test(values.title)) {
            errors.title = 'Not enough characters';
          }
          if (!values.twitterName && pageContext === 'twitters') {
            errors.twitterName = `Account Name is required`;
          }
          if (!values.articleUrl && pageContext === 'articles') {
            errors.articleUrl = `Link is required`;
          }
          if (!values.content) {
            errors.content = `Content is required`;
          }
          return errors;
        }}
        onSubmit={(values) => {
          addItem(pageContext, values);
          setIsVisible(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledError startAnimation={errors.title && touched.title && errors.title}>
              {errors.title && touched.title && errors.title}
            </StyledError>
            {pageContext === 'twitters' && (
              <>
                <StyledInput
                  type="text"
                  name="twitterName"
                  placeholder="account name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.twitterName}
                />
                <StyledError
                  startAnimation={errors.twitterName && touched.twitterName && errors.twitterName}
                >
                  {errors.twitterName && touched.twitterName && errors.twitterName}
                </StyledError>
              </>
            )}
            {pageContext === 'articles' && (
              <>
                <StyledInput
                  type="text"
                  name="articleUrl"
                  placeholder="link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articleUrl}
                />
                <StyledError
                  startAnimation={errors.articleUrl && touched.articleUrl && errors.articleUrl}
                >
                  {errors.articleUrl && touched.articleUrl && errors.articleUrl}
                </StyledError>
              </>
            )}
            <StyledTextArea
              name="content"
              as="textarea"
              placeholder="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <StyledError startAnimation={errors.content && touched.content && errors.content}>
              {errors.content && touched.content && errors.content}
            </StyledError>
            <StyledButton type="submit">Add Note</StyledButton>
          </form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
