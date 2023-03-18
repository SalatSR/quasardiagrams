import './DiagrammaSection.css';
import Diagramma from '../Diagramma/Diagramma';
import HistList from '../HistList/HistList';

function DiagrammaSection(props) {

  return (
    <section className='diagramma-section'>
      <h2 className='diagramma-section__title'>Статистика осмотров</h2>
      {/* <canvas className='diagramma-section__diagramma-wrap' width="200" height="200"> */}
      <div className='diagramma-section__diagramma-wrap'>
        <Diagramma
          data={props.data}
        />
      </div>
      <div className='diagramma-section__hist-list'>
        <HistList
          data={props.data}
        />
      </div>
    </section>
  )
}

export default DiagrammaSection;