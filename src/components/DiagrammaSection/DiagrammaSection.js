import './DiagrammaSection.css';
import Diagramma from '../Diagramma/Diagramma';
import HistList from '../HistList/HistList';

function DiagrammaSection(props) {

  return (
    <section className='diagramma-section'>
      <h2 className='diagramma-section__title'>Статистика осмотров</h2>
      <article className='diagramma-section__content'>
          <Diagramma data={props.data} />
          <HistList data={props.data} />
      </article>
    </section>
  )
}

export default DiagrammaSection;