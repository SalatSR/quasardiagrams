import './App.css';
import Main from './../Main/Main';

let initialData = [
  {
    'name': 'риски',
    'count': 1301,
    'color': '#FBDE37',
  },
  {
    'name': 'опасность',
    'count': 226,
    'color': '#E25E65',
  },
  {
    'name': 'в норме',
    'count': 815,
    'color': '#31B07E',
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
