import { useNavigate } from 'react-router-dom'
import { startQuizHandle } from '../../utils/utilsQuestion'
import './startpage.css'

export default function StartPage() {
    
    const navigate = useNavigate()

    const startQuiz = () => {
        startQuizHandle()
        navigate('/game')
    }
    
    return (
        <div className='start-page-div'>
            <h1>React Quiz App</h1>
            <button onClick={startQuiz}>Start game</button>
        </div>
    )
}