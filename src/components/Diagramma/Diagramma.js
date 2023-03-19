import './Diagramma.css';
import { useEffect, useState } from 'react';

function Diagramma(props) {

  const [totalNumberOfPeople, setTotalNumberOfPeople] = useState('');



  /** Отрисовываем диаграмму */
  useEffect(() => {

    let dataArray = props.data;
    let ctx = document.querySelector("canvas").getContext("2d");
    setTotalNumberOfPeople(dataArray.reduce((sum, { count }) => sum + count, 0));
    let currentAngle = 0;

    for (let moodValue of dataArray) {
      //вычисление угла, под которым сектор будет находиться на диаграмме
      let portionAngle = (moodValue.count / totalNumberOfPeople) * 2 * Math.PI;
      //рисование дуги и линии к центру, чтобы отличить срез от остальных
      ctx.beginPath();
      ctx.arc(75, 75, 75, currentAngle, currentAngle + portionAngle);
      currentAngle += portionAngle;
      ctx.lineTo(75, 75);
      //заполнение секторов соответствующим цветом
      ctx.fillStyle = moodValue.color;
      ctx.fill();
    }
  }, [props.data, totalNumberOfPeople])

  return (
    <div className='diagramma-wrapper'>
      <canvas
        className="diagramma"
        width={150}
        height={150} >
      </canvas>
      <div
        className='diagramma-info'>
        <span className='diagramma-info_number'>{totalNumberOfPeople}</span>
        <span className='diagramma-info_span'>всего</span>
      </div>
    </div>
  );
};

export default Diagramma;