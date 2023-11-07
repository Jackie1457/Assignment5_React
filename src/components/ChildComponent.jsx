import { useContext } from 'react';
import { GridContext } from '../context/GridContext';
import './ChildComponent.css';
import PropTypes from 'prop-types';

const ChildComponent = ({ index }) => {
  const { cells, toggleCell } = useContext(GridContext);
  const isOn = cells[index];

  const handleClick = () => toggleCell(index);

  return (
    <div
      className={`cell ${isOn ? 'on' : 'off'}`}
      onClick={handleClick}
    />
  );
};

ChildComponent.propTypes = {
    index: PropTypes.number.isRequired
  };

export default ChildComponent;
