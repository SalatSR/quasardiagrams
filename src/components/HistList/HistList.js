import './HistList.css';
import HistListItem from '../HistListItem/HistListItem';

function HistList(props) {

  return (
    <ul className='hist-list'>
      {props.data.map((sector) => {
        return ((
          <HistListItem
            name={sector.name}
            count={sector.count}
            color={sector.color}
          />
        ))
      })}
    </ul>
  )
};

export default HistList;