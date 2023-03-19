import './DiagrammaSection.css';
import Diagramma from '../Diagramma/Diagramma';
import HistList from '../HistList/HistList';
import { useEffect, useState } from 'react';

function DiagrammaSection({ data, state }) {

  const [isState, setIsState] = useState(null);

  useEffect(() => {
    setIsState(state);
  }, [state])

  return (
    <section
      className={`
        diagramma-section
        diagramma-section_${isState}`
      }>
      <h2
        className={`
          diagramma-section__title
          diagramma-section__title_${isState}
        `}>
        Статистика осмотров
      </h2>
      <article
        className={`
          diagramma-section__content
          diagramma-section__content_${isState}`
        }>
        <Diagramma data={data} />
        <HistList
          data={data}
          state={isState} />
      </article>
    </section>
  )
}

export default DiagrammaSection;