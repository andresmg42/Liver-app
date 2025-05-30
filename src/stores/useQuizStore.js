import { create } from "zustand";



const useQuizStore= create((set)=>{

    const zones= ['symptoms','cancer','treatment','recomendations']

    return{
        index:0,
        color:'white',
        countCollisions:0,
        quiz:null,
        name:null,
        progress:{
            user_id:null,
            quiz_id:null,
            answers:[],
            total_score:0,
            completed:false,
            last_updataed:Date.now()

        },
        setName:(name)=>set({name:name}),
        setQuiz:(quiz)=>set({quiz:quiz}),
        setCountCollisions:(countCollisions)=>set({countCollisions:countCollisions}),
        setIndex:(index)=>set({index:index}),
        setColor:(color)=>set({color:color}),
        setProgress:(progress)=>set({progress:progress}),
        setCollide: (name) => {
      if (!zones.includes(name)) return;

      set((state) => {
        const newCount = state.countCollisions + 1;

        if (newCount>1) return state;


        if (!state.quiz || !state.quiz.questions) return state;

        const actualQuestion=state.quiz.questions[state.index];
        const actualScore=state.progress.total_score;
        const newAnswer={
          question_id:actualQuestion._id,
          zone:name,
          correct:name===actualQuestion.zone,
        }

        const score=actualScore +( newAnswer.correct? 1:-1)

        const total_score= Math.max(0,score)

        const completed= state.index+1===state.quiz.questions.length;


        const newProgress={...state.progress,answers:[...state.progress.answers,newAnswer],total_score,completed}

        return {
          
          countCollisions: newCount,
          index:  state.index + 1,
          progress:newProgress
        };

      });
    }
    }
})

export default useQuizStore;