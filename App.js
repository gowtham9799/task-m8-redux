import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/reducer/counterslice';
import Footer from './components/Footer';
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div style={{textalign:'center', backgroundColor:'red'}}>
    <div style={{textalign:'center'}}>count:{count}</div>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
      <button  onClick={() => dispatch(increment())}> Increment </button>
      <Footer/>
  </div>
  );
}

export default App;
