import './Sector.css';

function Sector({ name, count, color }) {

  

  const divStyle = {
    zIndex: '4',
    borderColor: color,
    transform: 'rotate(350deg)',
  };

  return (
    <li style={divStyle}>
      <span>{name}</span>
    </li>
  )
}

export default Sector;