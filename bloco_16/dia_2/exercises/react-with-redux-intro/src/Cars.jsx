import React from 'react';

import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {

    const { redCar, blueCar, yellowCar, moveCar } = this.props;

    return (
      <div>
        <div>
          <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
          <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
        </div>
        <div>
          <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
          <button onClick={() => moveCar('blue', !blueCar)} type="button">Move</button>
        </div>
        <div>
          <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
          <button onClick={() => moveCar('yellow', !yellowCar)} type="button">Move</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  moveCar: (color, status) => dispatch(moveCar(color, status)),
});

const mapStateToProps = state => ({
  redCar: state.moveCarReducer.cars.red,
  blueCar: state.moveCarReducer.cars.blue,
  yellowCar: state.moveCarReducer.cars.yellow,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
