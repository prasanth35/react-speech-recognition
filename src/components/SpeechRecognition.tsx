import React from 'react'
import useSpeechRecognition from '../hooks/useSpeechRecognition'

const SpeechRecognition = () => {
    const { hasRecognitionSupport , isListening , speechText , startListening , stopListening  } = useSpeechRecognition()
  return (
    <div>
        {
            hasRecognitionSupport ?
            <div>

            <button onClick={startListening}>
                Start
            </button>
             <button onClick={stopListening}>
             Start
         </button>
         <p>{speechText} {isListening}</p>
         </div>
            :
            <p>Browswer is not supported</p>
        }
    </div>
  )
}

export default SpeechRecognition
