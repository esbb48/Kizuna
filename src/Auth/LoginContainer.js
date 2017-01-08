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
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onFormLogin = this.onFormLogin.bind(this);
  }

  onUsernameChange({ target: { value: username } = {} } = {}) {
    this.props.changeUsername({ username });
  }

  onFormLogin() {
    if (this.props.username.length === 0) return;
    this.props.loginRequest();
  }

  render() {
    return (
      <Box align="center">
        <Form pad="medium" fill>
          <Heading align="center" strong>Kizuna</Heading>
          <FormField label="NickName">
            <TextInput
              onDOMChange={this.onUsernameChange}
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

const mapStateToProps = ({ authModule: { username } }) => ({
  username,
});

const mapDispatchToProps = bindActionCreators.bind(null, {
  changeUsername,
  loginRequest,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
