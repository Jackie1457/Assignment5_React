import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [cells, setCells] = useState([false, false, false, false]);

  const toggleCell = (index) => {
    setCells(cells =>
      cells.map((cell, i) => (i === index ? !cell : cell))
    );
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      {children}
    </GridContext.Provider>
  );
};

GridProvider.propTypes = {
    children: PropTypes.node.isRequired
  };