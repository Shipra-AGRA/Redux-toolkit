import React from "react"
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch, useSelector } from "react-redux"
import { store } from "./src/redux/store"
import { decrement, increment } from "./src/features/counter/counterSlice"

const App = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    function handleIncrement() {
        dispatch(increment())
    }
    function hnadleDecrement() {
        dispatch(decrement())
    }
    return (
        <div className="container">
            <button onClick={handleIncrement}>+</button>
            <p>Count: {count}</p>
            <button onClick={hnadleDecrement}>-</button>
        </div>
    )
}
export default App

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <App />
    </Provider>)