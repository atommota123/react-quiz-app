import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: false,
    loading: true,
    currentQuestion: 1,
    answers: [],
    finished: false,
    correct_answers: [],
    started: false
}

export const getQuestions = createAsyncThunk('getQuestions', async() => {
    const promise = await fetch('https://opentdb.com/api.php?amount=10')
    const response = await promise.json()

    return response
})

const question = createSlice({
    name: "question",
    initialState,
    reducers: {
        nextQuestion: (state, action) => {
            state.answers = [...state.answers, action.payload]
            state.currentQuestion += 1
        },

        startQuiz: state => {
            state.finished = false
            state.started = true
        },

        finishQuiz: state => {
            state.finished = true
            state.started = false
        }
    },

    extraReducers: (builder) => {

        builder.addCase(getQuestions.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.questions = action.payload.results
            action.payload.results.forEach((q, index) => {
                state.correct_answers = [...state.correct_answers, {order: index - 1, answer: q.correct_answer}]
            })
            state.loading = false
        })
    }
})

export const {nextQuestion, startQuiz, finishQuiz} = question.actions
export default question.reducer