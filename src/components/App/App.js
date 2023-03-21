import './App.css';
import Main from './../Main/Main';
import { initialData, sectionState } from '../../utils/initialData';

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <Main data={initialData} state={sectionState} />
      </div>
    </div>
  );
};

export default App;
