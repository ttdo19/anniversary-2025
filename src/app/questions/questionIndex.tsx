import pic1 from "../../app/asset/Picture 1.jpg";
import pic2 from "../../app/asset/Picture 2.jpg"; 
import pic3 from "../../app/asset/Picture 3.jpg"; 
import pic4 from "../../app/asset/Picture 4.jpg"; 
import pic5 from "../../app/asset/Picture 5.png"; 
import ans1 from "../../app/asset/Ans 1.jpeg"; 
import ans2 from "../../app/asset/Ans 2.jpeg"; 
import ans3 from "../../app/asset/Ans 3.jpeg"; 
import ans4 from "../../app/asset/Ans 4.jpeg"; 
import ans5 from "../../app/asset/Ans 5.jpeg"; 

export const Questions = [
    {
        id: 1,
        animeImage: pic1, 
        answerImage: ans1, 
        question: "Where and when do you think the original image was taken?",
        possibleAnswers: [
            {
                id: 0,
                text: "Birmingham, June 2023"
            },
            {
                id: 1,
                text: "Atlanta, March 2024"
            },
            {
                id: 2,
                text: "Cincinnati, November 2023"
            },
            {
                id: 3,
                text: "Tuscaloosa, June 2024"
            }     
        ],
        correctAnswer: 2
    }, 
    {
        id: 2,
        animeImage: pic2, 
        answerImage: ans2, 
        question: "Where and when do you think the original image was taken?",
        possibleAnswers: [
            {
                id: 0,
                text: "Birmingham, June 2023"
            },
            {
                id: 1,
                text: "Cincinnati, November 2023"
            },
            {
                id: 2,
                text: "Atlanta, January 2024"
            },
            {
                id: 3,
                text: "Austin, July 2024"
            }     
        ],
        correctAnswer: 1
    },
    {
        id:3,
        animeImage: pic3, 
        answerImage: ans3, 
        question: "Where and when do you think the original image was taken?",
        possibleAnswers: [
            {
                id: 0,
                text: "Birmingham, June 2023"
            },
            {
                id: 1,
                text: "Tennessee, July 2023"
            },
            {
                id: 2,
                text: "Atlanta, February 2024"
            },
            {
                id: 3,
                text: "Tuscaloosa, July 2024"
            }     
        ],
        correctAnswer: 1
    }, 
    {
        id:4,
        animeImage: pic4, 
        answerImage: ans4, 
        question: "Where and when do you think the original image was taken? Isn't AI so bad in this one😂😂? Poor best friend!",
        possibleAnswers: [
            {
                id: 0,
                text: "Tuscaloosa, April 2023"
            },
            {
                id: 1,
                text: "Tuscaloosa, July 2023"
            },
            {
                id: 2,
                text: "Tuscaloosa, March 2024"
            },
            {
                id: 3,
                text: "Tuscaloosa, March 2025"
            }     
        ],
        correctAnswer: 0
    }, 
    {
        id:5,
        animeImage: pic5, 
        answerImage: ans5, 
        question: "Where and when do you think the original image was taken? AI is only getting meaner, isn't it? You can imagine this is when we get old then😅",
        possibleAnswers: [
            {
                id: 0,
                text: "Cincinnati, November 2023"
            },
            {
                id: 1,
                text: "Birmingham, December 2023"
            },
            {
                id: 2,
                text: "Atlanta, January 2024"
            },
            {
                id: 3,
                text: "Tuscaloosa, December 2024"
            }     
        ],
        correctAnswer:  1
    }, 
]