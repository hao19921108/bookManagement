import './App.css';
import BookList from './pages/BookList.jsx';

const App = () => {
  console.log('App rendered');
  return (
    <div className="App">
      <BookList />
    </div>
  );
};

export default App;
