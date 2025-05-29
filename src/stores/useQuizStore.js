import { create } from "zustand";

// import useAuthStore from "./use-auth-store";


const useQuizStore= create((set)=>{

    // const {userEmail}=useAuthStore();

    // const{user_id}=userEmail;

    const zones= ['symptoms','cancer','treatment','recomendations']

    return{
        index:0,
        color:'white',
        countCollisions:0,
        // collide:null,
        answers:{
            user_id:null,
            quiz_id:'1p',
            answers:[]

        },
        setCountCollisions:(countCollisions)=>set({countCollisions:countCollisions}),
        setIndex:(index)=>set({index:index}),
        setColor:(color)=>set({color:color}),
        setAnswers:(answers)=>set({answers:answers}),
        setCollide: (name) => {
      if (!zones.includes(name)) return;

      set((state) => {
        const newCount = state.countCollisions + 1;
        return {
          countCollisions: newCount,
          index: newCount === 1 ? state.index + 1 : state.index
        };
      });
    }
    }
})

export default useQuizStore;