import React, { PropTypes } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from 'grommet/components/Header';

function AuthContainer({ children }) {
  return (
    <div>
      <Header>My Header</Header>
      {/* this will render the child routes */}
      <div>
        {children}
      </div>
    </div>
  );
}

AuthContainer.propTypes = {
  children: PropTypes.any.isRequired,
};

function mapStateToProps(/* state */) {
  return {};
}

function mapDispatchToProps(/* dispatch */) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
