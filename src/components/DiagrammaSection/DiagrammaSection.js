import './DiagrammaSection.css';
import Diagramma from '../Diagramma/Diagramma';
import HistList from '../HistList/HistList';

function DiagrammaSection(props) {

  return (
    <section className='diagramma-section'>
      <h2 className='diagramma-section__title'>Статистика осмотров</h2>
      <div className='diagramma-section__diagramma-wrap'>
        <Diagramma />
      </div>
      <div className='diagramma-section__hist-list'>
        <HistList />
      </div>
    </section>
  )
}

export default DiagrammaSection;