import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Style from './VoiceRecog.module.css'


const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    
    const [data, setData] = useState("");
    const [quest,setQuest] =useState("");
    const [ans,setAns] = useState("")

    useEffect(()=>{
        switch(data) {
            case "ship":
              setAns('Yes. We proudly ship worldwide! 🌎 ✅ \n We’ve shipped authentic Indian handloom and handicrafts to over 200+ countries and we love adding more to the list! \n Plus you get free worldwide tracked shipping on all orders over $40')
                setQuest('Do you ship to my country?')
              break;
            case 'Kala Shakti':
              setQuest("KalaShakti");
              setAns("Let the art speak for you! \n \n We are an exquisite online platform for selling and buying Incredible India’s finest handloom and handicraft. \n \n ‘Unity in diversity, a phrase often used to describe the people of India, is indeed quite apt. In a country as diverse and as big as ours, local cultures, traditions, and artworks are what billions of people identify with and take pride in. We reimagine the potential of craft in India.")
              break;

            case 'bulk order':
                setQuest("Why can't we place bulk order?");
                setAns("KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.")
                break;
            
            case 'learn about the platform':
                setQuest('Where can we learn about the platform? ')
                setAns('We have short free of cost tutorials uploaded on our website which contains explainer videos of all sorts.'                                                                                                 )
                break;
            default:
                setQuest("No Data Availble");
                setAns("")
        }
    },[data])


    useEffect(() => {
        setData(transcript);
    }, [transcript])

    useEffect(() => {
        if(listening){
            toast(`Microphone ${listening ? 'on' : 'off'}`)
        }
    }, [listening])

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className={Style.VoiceRecogConatiner}> 
            <div className={Style.VoiceRecogComp}>
                <input placeholder='Type or search by voice' type="text" name="" id="" value={data} onChange={(e)=>{setData(e.target.value)}} />
                <button onClick={SpeechRecognition.startListening}><i className="fa-solid fa-microphone"></i></button>
            </div>

            {data?
            <div className={Style.RecognizedData}>
                <h3>{quest}</h3>
                <p>{ans}</p>
            </div>
            :<></>}
        </div>
    );
};
export default Dictaphone;