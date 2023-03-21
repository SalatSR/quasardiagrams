import './HistList.css';
import HistListItem from '../HistListItem/HistListItem';

function HistList({ data, state }) {

  return (
    <ul
      className={`
      hist-list
      hist-list_${state}
      `}
    >
      {data.map((sector, index) => {
        return ((
          <HistListItem
            key={index}
            name={sector.name}
            count={sector.count}
            color={sector.color}
            state={state}
          />
        ))
      })}
    </ul>
  )
};

export default HistList;