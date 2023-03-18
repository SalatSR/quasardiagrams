import './App.css';
import Main from './../Main/Main';

let initialData = [
  {
    'name': 'риски',
    'count': 1301,
    'color': 'yellow',
  },
  {
    'name': 'опасность',
    'count': 226,
    'color': 'red',
  },
  {
    'name': 'в норме',
    'count': 815,
    'color': 'green',
  },
  {
    'name': 'test-1',
    'count': 815,
    'color': 'blue',
  },
  {
    'name': 'test-2',
    'count': 815,
    'color': 'purple',
  },
];

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
