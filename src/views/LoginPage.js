import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Formik, Form } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { authenticateAction, registerAction } from 'data/actions';
import { routes } from 'routes';
import { Redirect } from 'react-router-dom';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;
const StyledHeading = styled(Heading)`
  margin-bottom: 20px;
`;
const StyledButton = styled(Button)`
  ${({ register }) =>
    register &&
    css`
      display: block;
      font-weight: ${({ theme }) => theme.bold};
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: black;
      text-transform: uppercase;
      margin: 20px;
    `}
  ${({ main }) =>
    main &&
    css`
      background-color: ${({ theme }) => theme.notes};
    `}
`;

// eslint-disable-next-line no-shadow
const LoginPage = ({ user, authenticateAction, registerAction }) => {
  const [isRegister, setIsRegister] = useState(false);
  const handleRegister = (username, password) => {
    registerAction(username, password, setIsRegister);
  };
  const handleLogin = (username, password) => {
    authenticateAction(username, password);
  };
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) =>
          isRegister ? handleRegister(username, password) : handleLogin(username, password)
        }
      >
        {({ handleChange, handleBlur, values }) => {
          if (user) {
            console.log(user);
            return <Redirect to={routes.home} />;
          }
          return (
            <>
              <StyledHeading>{isRegister ? 'Join To Us' : 'Sing In'}</StyledHeading>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="Login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <StyledButton main type="submit">
                  {isRegister ? 'Register' : 'Log in'}
                </StyledButton>
              </StyledForm>
              <StyledButton register onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Back to Login' : 'Create new account'}
              </StyledButton>
            </>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

const mapStateToProps = ({ user = null }) => ({
  user,
});

const mapDispatchToProps = {
  authenticateAction,
  registerAction,
};

LoginPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
  authenticateAction: PropTypes.func.isRequired,
  registerAction: PropTypes.func.isRequired,
};
LoginPage.defaultProps = {
  user: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
