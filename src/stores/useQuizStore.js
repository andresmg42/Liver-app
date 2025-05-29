import { create } from "zustand";


const useQuizStore= create((set)=>{

    return{
        index:0,
        color:'white',
        setIndex:(index)=>set({index:index}),
        setColor:(color)=>set({color:color})
    }
})

export default useQuizStore;