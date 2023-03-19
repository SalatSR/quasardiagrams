import './HistListItem.css';

function HistListItem({ name, count, color, state }) {

  return (
    <li
      className={`
        hist-list-item
        hist-list-item_${state}
      `}
      title={name}>
      <div
        className={`
          hist-list-item__color
          hist-list-item__color_${state}`}
        style={{ backgroundColor: `${color}` }}>
      </div>
      <span className={`
        hist-list-item__name
        hist-list-item__name_${state}`
      }>{name}</span>
      <span className={`
        hist-list-item__spacer
        hist-list-item__spacer_${state}
      `}>&#183;</span>
      <span className={`
        hist-list-item__count
        hist-list-item__count_${state}
      `}>{count}</span>
    </li>
  )
};

export default HistListItem;