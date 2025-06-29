import React, { useState } from "react"
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch, useSelector } from "react-redux"
import { store } from "./src/redux/store"
import { decrement, increment, incrementByAmount, reset } from "./src/features/counter/counterSlice"

const App = () => {
    const [amount,setAmount]=useState()
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    function handleIncrement() {
        dispatch(increment())
    }
    function handleDecrement() {
        dispatch(decrement())
    }
    function handleResetClick(){
        dispatch(reset())
    }
    function handleIncrementByAmount(){
        dispatch(incrementByAmount(amount))
    }
    return (
        <div className="container">
            <button onClick={handleIncrement}>+</button>
            <p>Count: {count}</p>
            <button onClick={handleDecrement}>-</button>
            <br/><br/>
            <button onClick={handleResetClick}>Reset</button>
            <br/><br/>
            <input 
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e)=>{setAmount(e.target.value)}}/>
            <button onClick={handleIncrementByAmount}>Increment By Amount</button>
        </div>
    )
}
export default App

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <App />
    </Provider>)