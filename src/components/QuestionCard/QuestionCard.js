import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { finishQuizHandle, nextQuestionHandle } from '../../utils/utilsQuestion'
import './questioncard.css'

export default function QuestionCard() {

    const { questions, currentQuestion } = useSelector(state => state.question)

    const [question, setQuestion] = useState(false)
    const [answers, setAnswers] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    const onClickAnswer = answer => {
        if(currentQuestion !== 10) {
            setDisabled(true)
            nextQuestionHandle(answer)
        } else {
            setDisabled(true)
            nextQuestionHandle(answer)
            finishQuizHandle()
            navigate('/result')
        }
    }

    function shuffleAnswers(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      

    useEffect(() => {
        setDisabled(false)
        setQuestion(questions[currentQuestion - 1])
    }, [currentQuestion, questions])

    useEffect(() => {
        if(question) {
            setAnswers(shuffleAnswers([...question.incorrect_answers, question.correct_answer]))
        }
    }, [question])


    return (
        <div className="question-card-div">
            <p>Question: {currentQuestion}/{questions.length}</p>
            <h2 className='question'>{question.question}</h2>

            <div className='answers-area'>
                {answers && answers.map(answer => (
                    <button disabled={disabled} onClick={() => onClickAnswer({order: currentQuestion, answer: answer})} key={answer}>{answer}</button>
                ))}
            </div>
            
        </div>
    )

}