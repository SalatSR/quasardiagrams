import './HistList.css';
import HistListItem from '../HistListItem/HistListItem';

function HistList({data, state}) {

  return (
    <ul
      className={`
      hist-list
      hist-list_${state}
      `}
    >
      {data.map((sector) => {
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