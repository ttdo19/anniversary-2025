"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState} from "react";
import {Variants} from "../variants";
import {motion} from "framer-motion";

interface Question {
    animeImage: StaticImageData, 
    answerImage: StaticImageData, 
    question: String,
    possibleAnswers: {
        id: number,
        text: String
    }[],
    correctAnswer: number, 
    onStageChange: (childIndex: number) => void
}

export default function Question({animeImage, answerImage, question, possibleAnswers, correctAnswer, onStageChange}: Question) {
    const [choice, setAnswer] = useState(false); 
    const [hasSelectChoice, setHasSelectChoice] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const variants = Variants;

    function handleClick(selectedChoice: number) {
        if (selectedChoice == correctAnswer) {
            setAnswer(true);
        }
        setHasSelectChoice(true);
    }

    function nextQuestion() {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        onStageChange(nextIndex);
        setAnswer(false); 
        setHasSelectChoice(false);
    }

    if (!hasSelectChoice) {
        return (
            <motion.div className="flex flex-row flex-wrap justify-center "
                variants={variants}
                key={currentIndex}
                initial='initial'
                animate='visible'>
                <div className="min-sm:w-[35vw] w-[70vw]">
                    <Image
                        src={animeImage}
                        alt="Anime Image"
                        width={500}
                        className="rounded-lg border-2 border-black"
                    />
                </div>
                
                <div className="flex flex-col flex-wrap justify-center items-center w-[70vw] min-sm:w-[50vw] text-lg min-sm:text-2xl min-2xl:text-4xl">
                    <h2>{question}</h2>
                    <div className="flex flex-row flex-wrap justify-center text-sm min-sm:text-lg min-2xl:text-2xl">
                        {possibleAnswers.map((ans) => {
                            return <button 
                            key={ans.id}
                            onClick={()=> handleClick(ans.id)} 
                            className="rounded-[8px] border-solid w-[250px] min-2xl:w-[400px] border-[2px] m-[0.5rem] border-black px-[1.2em] py-[0.6em] font-medium bg-[#C1C3C1] cursor-pointer text-black hover:bg-[#1A97DB] hover:text-white">
                                {ans.text}
                            </button>
                        })}
                    </div>
                </div>
            </motion.div>
        );
    } else {
        return (
            <motion.div className="flex flex-col items-center text-lg min-sm:text-xl my-[0.25em]"
                variants={variants}
                initial='initial'
                animate='visible'
                >
                <h1>
                    {choice && "You chose correctly🎉🎉🎉"}
                    {!choice && "Oops!🫣🙀"}
                </h1>
                <h1>{!choice && "Maybe you will get the next one!"}</h1>
                <div className="flex flex-row flex-wrap gap-[20px] justify-center my-[0.25em] ">
                    <div className="w-[50vw] min-sm:w-[30vw]">
                        <Image
                            src={animeImage}
                            alt="Anime Image"
                            width={500}
                            className="rounded-lg border-2 border-gray"
                        />
                    </div>
                    <div className="w-[50vw] min-sm:w-[30vw]">
                        <Image
                            src={answerImage}
                            alt="Original Image"
                            width={500}
                            className="rounded-lg border-2 border-gray"
                        />
                    </div>
                </div>
                <h1>
                {possibleAnswers[correctAnswer].text}
                </h1>
                <button onClick={nextQuestion} className="min-sm:text-xl w-[100px] min-2xl:w-[400px] text-lg rounded-[8px] border-solid border-[2px] p-[0.3em] min-sm:m-[0.5rem] border-black min-sm:px-[1.2em] min-sm:py-[0.6em] font-medium bg-[#C1C3C1] cursor-pointer text-black hover:bg-[#1A97DB] hover:text-white">
                    Continue
                </button>
            </motion.div>
            
        );
    }
    
    
}