import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import TextInput from 'grommet/components/TextInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUsername, loginRequest } from './authModule';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onFormLogin = this.onFormLogin.bind(this);
  }

  onChangeUsername(event) {
    const username = event.target.value;
    this.props.changeUsername({ username });
  }

  onFormLogin() {
    const username = 'tempName';
    this.props.loginRequest({ username });
  }

  render() {
    return (
      <Box align="center">
        <Form pad="medium" fill>
          <Heading align="center" strong>Kizuna</Heading>
          <Button
            label="Facebook"
            fill
            onClick={() => {}}
            primary={false}
            type="button"
          />
          <Heading align="center" tag="h4">or</Heading>
          <FormField label="NickName">
            <TextInput
              onDOMChange={this.onChangeUsername}
              value={this.props.username}
            />
          </FormField>
          <Footer pad={{ vertical: 'medium' }}>
            <Button
              label="Sign In"
              fill
              onClick={this.onFormLogin}
              primary
              type="submit"
            />
          </Footer>
        </Form>
      </Box>
    );
  }

}

LoginContainer.propTypes = {
  changeUsername: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

function mapStateToProps({ authModule }) {
  const { username } = authModule;
  return {
    username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeUsername: bindActionCreators(changeUsername, dispatch),
    loginRequest: bindActionCreators(loginRequest, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
