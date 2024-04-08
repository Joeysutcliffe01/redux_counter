import { configureStore } from "@reduxjs/toolkit" 
import counterReducer from "../features/counter/counterSlice"

// Redux store is a container for js apps
// This will store the whole state of the app in an emutiable object tree

export const store = configureStore({
    reducer:{
       counter: counterReducer
    }
})
