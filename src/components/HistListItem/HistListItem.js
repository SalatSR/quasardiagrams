import './HistListItem.css';

function HistListItem({ name, count, color }) {

  return (
    <li className='hist-list-item'>
      <div className='hist-list-item__color' style={{backgroundColor: `${color}`}}></div>
      <span className='hist-list-item__name'>{name}</span>
      <span className='hist-list-item__spacer'>&#183;</span>
      <span className='hist-list-item__count'>{count}</span>
    </li>
  )
};

export default HistListItem;