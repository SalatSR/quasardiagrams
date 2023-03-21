import PropTypes from 'prop-types'
import Header from '../Header/Header';
import DiagrammaSection from '../DiagrammaSection/DiagrammaSection';

/** Задаём дефолтные значения на случай пропущенных/пустых данных */
Main.defaultProps = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: 'Данные не переданы',
    count: 0,
    color: '#fff',
  })),
};

/** Задаём проверку типа у входящих данных */
Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })),
};

function Main({ data, state }) {

  return (
    <main className='main'>
      <Header />
      <DiagrammaSection
        data={data}
        state={state}
      />
    </main>
  )
}

export default Main;