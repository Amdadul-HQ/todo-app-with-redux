import { useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './Redux/features/counter/counterSlice';
import { useAppSelector } from './Redux/features/hook';
import { Button } from './components/ui/button';

function App() {
  const dispatch = useDispatch();

  const { count } = useAppSelector((state)=> state.counter)

  const handleIncrement = () =>{
    dispatch(increment())
  }

  const handleDecrement = () =>{
    dispatch(decrement())
  }

  return (
    <div>
     <h1>Counter with Redux</h1>
     <Button onClick={handleIncrement}>
      Increment
      </Button>
     <div>
      {count}
     </div>
     <Button onClick={handleDecrement}>
      Decrement
     </Button>
    </div>
  )
}

export default App
