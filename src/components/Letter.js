import React, {useContext, useEffect} from 'react'
import { AppContext } from '../App';

function Letter({letterPos,attemptval }) {
    const {board,currAttempt,correctWord, setDisabledLetters} = useContext(AppContext);  
    const letter=board[attemptval][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currAttempt.attempt > attemptval && 
                        (correct ? "correct" : almost ? "almost" :"error");

    useEffect(()=>{
        if(letter !== "" && !correct && !almost){
             setDisabledLetters((prev) => [...prev , letter]);
        }
    },[currAttempt.attempt]);
            
  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}

export default Letter