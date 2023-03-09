import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import QuestionCard from "../../components/QuestionCard/QuestionCard"
import { getQuestionsHandle } from "../../utils/utilsQuestion"
import './gamepage.css'

export default function GamePage() {

    const {questions, loading, started} = useSelector(state => state.question)
    
    useEffect(() => {
        getQuestionsHandle()
    }, [])

    if(!started) {
        return <Navigate to='/' />
    }

    return (
        <div className="game-page-div">
            {loading && <h1 style={{color: 'white'}}>Loading...</h1>}
            {questions && <QuestionCard/>}
        </div>
    )
}