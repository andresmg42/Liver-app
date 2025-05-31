import api from "../../../api/user.api";


export const  sendProgress= async (data)=>{
    try {

    const res= await api.post('/progress/',data)
    console.log('send data: ',res.data)

        
    } catch (error) {

        console.error('error to save progress',error)
        
    }

}

export const getUserByEmail = async (email)=>{
    try {

        const res= await api.get(`/users/email/?email=${email}`)

        console.log(res.data)

        return res.data

        
        
    } catch (error) {

        console.error('Error in get user by email:',error)
        
    }
}

export const loadProgress= async (user_id,quiz_id)=>{
    try {

        const res =await api.get(`/progress/?userId=${user_id}&quizId=${quiz_id}`)

        

        return res.data
        
    } catch (error) {

        throw error;
        
    }
}

export const sendLeaderBoard=async (quiz_id,user_id)=>{
    try {
        const res= api.put('/leaderboard/',{quiz_id:quiz_id,user_id:user_id})
        console.log('res send leader:',res)
    } catch (error) {
        console.error('error sending leaderboard',error)
    }
}


