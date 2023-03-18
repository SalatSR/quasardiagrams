import './Diagramma.css';
import HistList from '../HistList/HistList';

function Diagramma(props) {

  return (
    <section className='diagramma-section'>
      <h2 className='diagramma__title'>Статистика осмотров</h2>
      <div className='diagramma'></div>
      <div className='diagramma__hist-list'>
        <HistList />
      </div>
    </section>
  )
}

export default Diagramma;