import React, {  useReducer } from 'react'

const Demo = () => {
   
    let reducer = (state, action) => {
        switch (action.type) {
            case "increase": return { ...state, count: state.count + 1 }


            case "decrease": return { ...state, count: state.count - 1 }


            case "reset": return { ...state, count: state.count = 0 }



            default: return state

        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0 });


    return (
        <>
            <div>

                <h1>{state.count}</h1>
                <button onClick={() => dispatch({ type: "decrease" })}>SUb</button>
                <button onClick={() => dispatch({ type: "increase" })}>Add</button>
                <button onClick={() => dispatch({ type: "reset" })}>reset</button>
            </div>
        </>
    )
}

export default Demo