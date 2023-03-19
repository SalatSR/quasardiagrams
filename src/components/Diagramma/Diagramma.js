import './Diagramma.css';
import { useEffect, useState } from 'react';

function Diagramma({ data, state }) {

  /** Сумма показателей */
  const [totalNumberOfPeople, setTotalNumberOfPeople] = useState(null);
  /** Длина катета квадрата описывающий диаграмму */
  const [sideOfOutterSquare, setsideOfOutterSquare] = useState(null);
  /** Длина катета квадрата описывающего пустоту в диаграмме */
  const [sideOfInnerSquare, setsideOfInnerSquare] = useState(null);
  /** Центр квадратов */
  const [centerDiag, setCenterDiag] = useState(null);

  /** Вычисляем ширину, высоту и центр, необходимые для отрисовки диаграммы */
  useEffect(() => {

    /** Считаем центр квадратов */
    function calcCenterDiag() {
      setCenterDiag(sideOfOutterSquare / 2)
    }

    if (state === 2) {
      calcCenterDiag(setsideOfOutterSquare(285));
      setsideOfInnerSquare(185)
    } else {
      calcCenterDiag(setsideOfOutterSquare(150));
      setsideOfInnerSquare(90)
    }

  }, [state, sideOfOutterSquare, centerDiag])

  /** Отрисовываем диаграмму */
  useEffect(() => {

    let dataArray = data;
    let ctx = document.querySelector(".diagramma").getContext("2d");
    setTotalNumberOfPeople(dataArray.reduce((sum, { count }) => sum + count, 0));
    let currentAngle = 0;

    for (let moodValue of dataArray) {
      /** Вычисление угла, под которым сектор будет находиться на диаграмме */
      let portionAngle = (moodValue.count / totalNumberOfPeople) * 2 * Math.PI;
      /** Рисование дуги и линии к центру, чтобы отличить срез от остальных */
      ctx.beginPath();
      ctx.arc(centerDiag, centerDiag, centerDiag, currentAngle, currentAngle + portionAngle);
      currentAngle += portionAngle;
      ctx.lineTo(centerDiag, centerDiag);
      /** Заполнение секторов соответствующим цветом */
      ctx.fillStyle = moodValue.color;
      ctx.fill();
    }

  }, [data, totalNumberOfPeople, centerDiag])

  return (
    <div className='diagramma-wrapper'>
      <canvas
        className="diagramma"
        width={sideOfOutterSquare}
        height={sideOfOutterSquare} >
      </canvas>
      <div
        className='diagramma-info'
        style={{ width: sideOfInnerSquare, height: sideOfInnerSquare }}
      >
        <span
          className={`
            diagramma-info_number
            diagramma-info_number_${state}
          `}>
          {totalNumberOfPeople}
        </span>
        <span className={`
          diagramma-info_span
          diagramma-info_span_${state}
        `}>
          всего
        </span>
      </div>
    </div>
  );
};

export default Diagramma;