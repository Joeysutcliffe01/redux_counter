// These are 
import resetAll from '../../resetAll.svg';
import {useSelector, useDispatch} from "react-redux"
import { 
    increment, 
    decrement, 
    reset,
    incrementByAmount
} from "./counterSlice"
import { useState } from "react"

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }

    return (
        <section className="counter_card">
          <div>
            <p className="counter_number">{count}</p>    
          </div>
          <div className="counter_btns_container">
            <div className="counter_btns_top_container">
                <button className="btn counter_increment" onClick={() => dispatch(increment())}>+</button>
                <button className="btn counter_decrement" onClick={() => dispatch(decrement())}>-</button>
                <button className="btn counter_reset" onClick={() => dispatch(reset())}>Reset</button>
           
            </div>
            <div>
            <div className="counter_btns_container_bottom">
                <button className="btn counter_increment_by_amount" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                    <input 
                        className="counter_increment_by_amount_input"
                        type="text"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                    />
                </div>
                <span 
                class="counter_reset_all material-symbols-outlined"
                onClick={resetAll}
                >
                restart_alt
                </span> 
            </div>
          </div>
        </section>
    ) 
}

export default Counter
