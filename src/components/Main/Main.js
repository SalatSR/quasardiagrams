import './Main.css';
import Header from '../Header/Header';
import DiagrammaSection from '../DiagrammaSection/DiagrammaSection';

function Main(props) {

  return (
    <main className='main'>
      <Header />
      <DiagrammaSection
        data={props.data}
        state={props.state}
      />
    </main>
  )
}

export default Main;