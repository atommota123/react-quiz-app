import store from "../store";
import { nextQuestion, getQuestions, startQuiz, finishQuiz } from "../store/question";


export const getQuestionsHandle = () => {

    let started = store.getState().question.started
    
    if(started) {
        store.dispatch(getQuestions())
    }
}

export const nextQuestionHandle = answer => {

    setTimeout(() => {
        store.dispatch(nextQuestion(answer))
    }, 500)
    
}

export const resultHandle = () => {
    const {answers, correct_answers} = store.getState().question
    let correct_count = 0


    answers.forEach((answer, index) => {
        if(answer.answer === correct_answers[index].answer) {
            correct_count += 1
        }
    })

    return correct_count

}


export const startQuizHandle = () => {
    store.dispatch(startQuiz())
}

export const finishQuizHandle = () => {
    store.dispatch(finishQuiz())
}