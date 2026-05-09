import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    incrementByAmount,
    selectCount
} from './counterSlice'

export function Counter() {
    // useSelector allows us to extract data from the Redux store state
    const count = useSelector(selectCount)

    // useDispatch returns a function that lets us dispatch actions
    const dispatch = useDispatch()

    return (
        <div className="counter">
            <h2>Counter Value: {count}</h2>

            <div className="buttons">
                {/* When clicked, dispatch the increment action */}
                <button
                    onClick={() => dispatch(increment())}
                    className="button"
                >
                    Increment
                </button>

                {/* When clicked, dispatch the decrement action */}
                <button
                    onClick={() => dispatch(decrement())}
                    className="button"
                >
                    Decrement
                </button>

                {/* Example of dispatching an action with payload */}
                <button
                    onClick={() => dispatch(incrementByAmount(5))}
                    className="button"
                >
                    Add 5
                </button>
            </div>
        </div>
    )
}
