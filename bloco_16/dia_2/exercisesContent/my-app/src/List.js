import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer,
});

export default connect(mapStateToProps)(List);
