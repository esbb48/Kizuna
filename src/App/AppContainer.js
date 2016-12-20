import React, { PropTypes } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';

function AuthContainer({ children }) {
  const pad = { horizontal: 'medium' };
  return (
    <App centered={false} inline>
      <Header colorIndex="brand">
        <Box pad={pad}>
          Kizuna
        </Box>
      </Header>

      {/* this will render the child routes */}
      <Article pad={pad}>
        {children}
      </Article>
    </App>
  );
}

AuthContainer.propTypes = {
  children: PropTypes.shape().isRequired,
};

function mapStateToProps(/* state */) {
  return {};
}

function mapDispatchToProps(/* dispatch */) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
