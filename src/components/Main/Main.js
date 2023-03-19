import './Main.css';
import Header from '../Header/Header';
import DiagrammaSection from '../DiagrammaSection/DiagrammaSection';

function Main({data, state}) {

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