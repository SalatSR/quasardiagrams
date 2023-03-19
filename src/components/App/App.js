import './App.css';
import Main from './../Main/Main';
import initialData from '../../utils/initialData';

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <Main data={initialData} state={1} />
      </div>
    </div>
  );
}

export default App;
