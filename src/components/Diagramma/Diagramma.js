import './Diagramma.css';
import Sector from '../Sector/Sector';

function Diagramma(props) {

  return (
    <ul className='diagramma'>
      {props.data.map((sector) => {
        return ((
          <Sector
            className='diagramma__item'
            name={sector.name}
            count={sector.count}
            color={sector.color}
          />
        ));
      })};
    </ul>
  );
};

export default Diagramma;