"use client"
import Question from "./question";
import { Questions } from "./questionIndex";
import { useState} from "react";
import dynamic from "next/dynamic";
import Heart from "../../app/asset/Heart.json";
import {motion} from "framer-motion";
import {Variants, Variants2} from "../variants";

export default function QuestionHomePage() {
    const questionList = Questions; 
    const variants = Variants;
    const variants2 = Variants2;

    const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
    const [questionIndex, setQuestionIndex] = useState(0);

    const updateQuestionIndex = (childIndex: number) => {
        setQuestionIndex(childIndex);
    }
    
    if (questionIndex < 5) {
        return (
            <div
                className="h-screen flex flex-row flex-wrap justify-center items-center text-center p-[1.25em] mx-[5%] font-[family-name:var(--font-geist-sans)]"
                >
                <Question animeImage={questionList[questionIndex].animeImage} 
                    correctAnswer={questionList[questionIndex].correctAnswer}
                    answerImage={questionList[questionIndex].answerImage}
                    question={questionList[questionIndex].question}
                    possibleAnswers={questionList[questionIndex].possibleAnswers}
                    onStageChange={updateQuestionIndex}
                ></Question>
            </div>
        );
    }
    return (
        <motion.div className="h-screen flex flex-col justify-center items-center text-center text-4xl max-sm:text-2xl"
            variants={variants2}
            initial='initial'
            animate='visible'>
            <h1>I hope husband enjoys this little surprise!</h1>
            <h1>Love you the most</h1>
            <DynamicLottie 
                autoplay={true}
                loop={true}
                animationData={Heart}
                style={{height: 500, width: 500}}
            />
            <h1>Happy Anniversary!</h1>
        </motion.div>
    )
}
