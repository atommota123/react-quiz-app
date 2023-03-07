import { configureStore } from "@reduxjs/toolkit";
import question from "./question";


const store = configureStore({
    reducer: {
        question
    }
})

export default store