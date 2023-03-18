import './Diagramma.css';
import { useEffect } from 'react';

function Diagramma(props) {

  /** Отрисовываем диаграмму */
  useEffect(() => {

    let dataArray = props.data;
    let ctx = document.querySelector("canvas").getContext("2d");
    let totalNumberOfPeople = dataArray.reduce((sum, { count }) => sum + count, 0);
    let currentAngle = 0;

    for (let moodValue of dataArray) {
      //вычисление угла, под которым сектор будет находиться на диаграмме
      let portionAngle = (moodValue.count / totalNumberOfPeople) * 2 * Math.PI;
      //рисование дуги и линии к центру, чтобы отличить срез от остальных
      ctx.beginPath();
      ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
      currentAngle += portionAngle;
      ctx.lineTo(100, 100);
      //заполнение секторов соответствующим цветом
      ctx.fillStyle = moodValue.color;
      ctx.fill();
    }
  }, [props.data])

  return (
    <div className="diagramma">
      <canvas width={250} height={250} ></canvas>
    </div>
  );
};

export default Diagramma;