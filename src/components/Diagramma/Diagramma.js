import './Diagramma.css';
import { useEffect, useState } from 'react';
import useWindowDimensions from './../../hooks/windowDimensions'

// Так же как Main, App и Header, логично было бы назвать этот компонент по-английски - Diagram
function Diagramma({ data, state }) {

  /** Сумма показателей */
  const [totalNumberOfPeople, setTotalNumberOfPeople] = useState(null);
  /** Длина катета квадрата описывающий диаграмму */
  const [sideOfOutterSquare, setSideOfOutterSquare] = useState(null);
  /** Длина катета квадрата описывающего пустоту в диаграмме */
  const [sideOfInnerSquare, setSideOfInnerSquare] = useState(null);
  /** Центр квадратов */
  const [centerDiag, setCenterDiag] = useState(null);
  /** Получаем ширину окна */
  const { width } = useWindowDimensions();

  /** Отслеживаем изменение ширины окна
   * для каждого из состояний отображения
   * диаграммы и истории
   */
  useEffect(() => {

    if (state === 0) {
      if (width <= 550) {
        setSideOfOutterSquare(150);
        setSideOfInnerSquare(90);
      }
      if (width >= 551 && width <= 800) {
        setSideOfOutterSquare(285);
        setSideOfInnerSquare(185);
      }
      if (width >= 801 && width <= 1278) {
        setSideOfOutterSquare(420);
        setSideOfInnerSquare(280);
      }
      if (width >= 1279) {
        setSideOfOutterSquare(555);
        setSideOfInnerSquare(375);
      }
    }

    if (state === 1) {
      if (width <= 800) {
        setSideOfOutterSquare(150);
        setSideOfInnerSquare(90);
      }
      if (width >= 801 && width <= 1278) {
        setSideOfOutterSquare(285);
        setSideOfInnerSquare(185);
      }
      if (width >= 1279) {
        setSideOfOutterSquare(420);
        setSideOfInnerSquare(280);
      }
    }

    if (state === 2) {
      // Вся логика в этой ветке полностью идентична случаю (state === 0)
      // Возможно, их имеет смысл объединить.
      if (width <= 550) {
        setSideOfOutterSquare(150);
        setSideOfInnerSquare(90);
      }
      if (width >= 551 && width <= 800) {
        setSideOfOutterSquare(285);
        setSideOfInnerSquare(185);
      }
      if (width >= 801 && width <= 1278) {
        setSideOfOutterSquare(420);
        setSideOfInnerSquare(280);
      }
      if (width >= 1279) {
        setSideOfOutterSquare(555);
        setSideOfInnerSquare(375);
      }
    }

  }, [width, state]);

  /** Вычисляем центр диаграммы */
  useEffect(() => {

    function calcCenterDiag() {
      setCenterDiag(sideOfOutterSquare / 2)
    }
    calcCenterDiag(sideOfOutterSquare);

  }, [sideOfOutterSquare])

  /** Отрисовываем диаграмму */
  useEffect(() => {

    let dataArray = data;
    let ctx = document.querySelector(".diagramma").getContext("2d");

    // setTotalNumberOfPeople сильно огранивает сферу применения диаграммы.
    // Получается, что кроме распределения людей она ничего показывать не должна.
    // Я бы предложил использовать здесь более абстрактную терминологию
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
