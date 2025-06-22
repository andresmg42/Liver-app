import { useEffect, useState } from "react";
import useAuthStore, { useEventStore } from "../../../stores/use-auth-store";
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { sendProgress } from "../services/services";

const HtmlQuestions = (props) => {
  const { click, setClickQuestion } = useEventStore();

  const {userEmail}=useAuthStore();



  const targetRef = useRef();

  const questions = props.sections.questions;

  const color = props.color;

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % questions.length);
  };

  const back = () => {
    setIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

  const [answers, setAnswers] = useState({
    user_id: userEmail.user_id,
    quiz_id: props.quiz_id,
    section_slug: props.sections.slug,
    answers: [],
  });

  const handleAnswerChange = () => {
    const selected = document.querySelector(
      `input[name=question-${questions[index]._id}]:checked`
    );

    if (!selected) {
      console.warn("No radio option selected");
      return;
    }

    const selectedValue = parseInt(selected.value);

    setAnswers((prev) => {
      const existingAnswers = [...prev.answers];
      const index_question = existingAnswers.findIndex(
        (a) => a.question_id === questions[index]._id
      );

      if (index_question >= 0) {
        existingAnswers[index_question].selected_index = selectedValue;

        existingAnswers[index_question].correct =
          selectedValue === questions[index].correct_option_index;

        existingAnswers[index_question] = {
          ...existingAnswers[index_question],
          selected_index: selectedValue,
          correct: selectedValue === questions[index].correct_option_index,
        };
      } else {
        const answer = {
          question_id: questions[index]._id,
          selected_index: selectedValue,
          correct: selectedValue === questions[index].correct_option_index,
        };

        existingAnswers.push(answer);
      }

      return { ...prev, answers: existingAnswers };
    });
  };


  const handleSend=()=>{


    sendProgress(answers)

  }

  // console.log("answers: ", answers);

  // console.log('questions:',questions.length)
  // console.log('answers:',answers.answers.length)

  return (
    <Html {...props} ref={targetRef}>
      <div
        className={` 
            items-center  gap-8 md:w-[70vh]  w-[45vh]  mx-auto px-4 relative  z-10`}
      >
        <div
          className={`bg-black/50 p-5 rounded-xl shadow-xl w-full transition-all duration-500 
           h-[30vh] md:h-[50vh] overflow-y-auto `}
        >
          <div className=" flex justify-end w-full mb-3">
            <button
              onClick={() => {
                setClickQuestion(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className=" flex justify-between gap-2 items-center mb-3">
            <button onClick={back} className="animate-bounce-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </button>

            <h2
              className="text-base md:text-2xl font-semibold text-center"
              style={{ color }}
            >
              {questions[index].text}
            </h2>

            <button onClick={next} className="animate-bounce-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <ul className="space-y-2">
            {["a", "b", "c", "d"].map((item, i) => {
            
            const currentQuestionId=questions[index]._id;

            const existingAnswer=answers.answers.find(a=>a.question_id===currentQuestionId);
            
            return (
              <li key={item} className="flex items-center gap-2 ml-2">
                <input
                  type="radio"
                  id={`answer-${item}`}
                  className="w-4 h-4"
                  onChange={() => handleAnswerChange()}
                  value={i}
                  name={`question-${currentQuestionId}`}
                  checked={existingAnswer?.selected_index===i}
                />
                <label
                  htmlFor={`answer-${item}`}
                  className="text-sm md:text-xl md:font-bold text-left cursor-pointer"
                  style={{ color }}
                >
                  {questions[index].options[i]}
                </label>
              </li>
            )}
            
            )}
          </ul>
         {questions.length===answers.answers.length &&(
           <button 
           className="bg-white/50 hover:bg-black text-white font-bold py-2 px-4 rounded-full mt-3"
           onClick={handleSend}
           
           >
            Send
          </button>
         )}
        </div>
      </div>
    </Html>
  );
};

export default HtmlQuestions;
