import './Main.css';
import PropTypes from 'prop-types'
import Header from '../Header/Header';
import DiagrammaSection from '../DiagrammaSection/DiagrammaSection';

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

/** Задаём проверку типа у входящих данных */
Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  })),
};

export default Main;