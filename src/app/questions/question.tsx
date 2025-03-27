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
            <motion.div className="flex flex-row flex-wrap "
                variants={variants}
                key={currentIndex}
                initial='initial'
                animate='visible'>
                <div className="max-sm:w-[80vw] w-[35vw]">
                    <Image
                        src={animeImage}
                        alt="Anime Image"
                        width={500}
                        className="rounded-lg border-2 border-black"
                    />
                </div>
                
                <div className="flex flex-col flex-wrap justify-center w-[50vw] max-sm:w-[80vw] text-2xl max-sm:text-lg">
                    <h2>{question}</h2>
                    <div className="flex flex-row flex-wrap justify-center text-lg max-sm:text-sm">
                        {possibleAnswers.map((ans) => {
                            return <button 
                            key={ans.id}
                            onClick={()=> handleClick(ans.id)} 
                            className="rounded-[8px] border-solid w-[300px] border-[2px] m-[0.5rem] border-black px-[1.2em] py-[0.6em] font-medium bg-[#C1C3C1] cursor-pointer text-black hover:bg-[#1A97DB] hover:text-white">
                                {ans.text}
                            </button>
                        })}
                    </div>
                </div>
            </motion.div>
        );
    } else {
        return (
            <motion.div className="flex flex-col items-center text-4xl max-sm:text-xl my-[0.25em]"
                variants={variants}
                initial='initial'
                animate='visible'
                >
                <h1>
                    {choice && "You chose correctly🎉🎉🎉"}
                    {!choice && "Oops! Maybe you will get the next one!"}
                </h1>
                <div className="flex flex-row flex-wrap gap-[20px] justify-center my-[0.25em] ">
                    <div className="w-[30vw] max-sm:w-[60vw]">
                        <Image
                            src={animeImage}
                            alt="Anime Image"
                            width={500}
                            className="rounded-lg border-2 border-gray"
                        />
                    </div>
                    <div className="w-[30vw] max-sm:w-[60vw]">
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
                <button onClick={nextQuestion} className="max-sm:text-lg text-xl rounded-[8px] border-solid border-[2px] m-[0.5rem] border-black px-[1.2em] py-[0.6em] font-medium bg-[#C1C3C1] cursor-pointer text-black hover:bg-[#1A97DB] hover:text-white">
                    Continue
                </button>
            </motion.div>
            
        );
    }
    
    
}