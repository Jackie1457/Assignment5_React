import { useContext } from 'react';
import { GridContext } from '../context/GridContext';
import ChildComponent from './ChildComponent';
import './ParentComponent.css';

const ParentComponent = () => {
  const { cells } = useContext(GridContext);
  const countOnCells = cells.filter(Boolean).length;

  return (
    <div className="parent">
      <div className="counter">Count: {countOnCells}</div>
      <div className="grid">
        {cells.map((_, index) => (
          <ChildComponent key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
