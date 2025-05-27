import api from "../../../api/user.api";


export const  sendProgress= async (data)=>{
    try {

    const res= await api.post('/progress/',data)
    console.log(res.data)

        
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

// export const loadProgress= async (email)=>{
//     try {

//         const res =await api.get()
        
//     } catch (error) {
        
//     }
// }




