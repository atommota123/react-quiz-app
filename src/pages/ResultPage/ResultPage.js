import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { resultHandle } from '../../utils/utilsQuestion'
import './resultpage.css'

export default function ResultPage() {

    const {finished} = useSelector(state => state.question)
    const [correct, setCorrect] = useState(0)

    useEffect(() => {
        setCorrect(resultHandle())
    }, [])
    
    if(!finished) { // finished false ise çalışacak
        return <Navigate to='/' />
    }
    
    return ( // finished true ise çalışacak
        <div className='result-page-div'>
        <h1>Correct answers: {correct}</h1>
        </div>
    )
}