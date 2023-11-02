import { base_URL } from "./baseURL";
import { commonAPI } from "./commonAPI";

// adding data
export const addApost=async(post)=>{
    // http post request to http://localhost:5000/post for adding post in json server
    //  and return response to header component
    return await commonAPI("POST",`${base_URL}/post`,post)
}

export const addAvideo=async(video)=>{
    // http post request to http://localhost:5000/video for adding post in json server
    //  and return response to header component
    return await commonAPI("POST",`${base_URL}/post`,video)
}

export const addAtext=async(text)=>{
    // http post request to http://localhost:5000/text for adding post in json server
    //  and return response to header component
    return await commonAPI("POST",`${base_URL}/post`,text)
}
export const getApost=async()=>{
    // http get request to http://localhost:5000/post for adding post in json server
    //  and return response to home component
    return await commonAPI("GET",`${base_URL}/post`)
}

export const deleteApost=async(id)=>{
    // http get request to http://localhost:5000/post for adding post in json server
    //  and return response to home component
    return await commonAPI("DELETE",`${base_URL}/post/${id}`,{})
}
export const editApost=async(id,editedPost)=>{
    // http get request to http://localhost:5000/post for adding post in json server
    //  and return response to home component
    return await commonAPI("PUT",`${base_URL}/post/${id}`,editedPost)
}

export const registerForm=async(data)=>{
// http get request to http://localhost:5000/post for adding post in json server
    //  and return response to home component
    return await commonAPI("POST",`${base_URL}/register`,data)
}

export const profileDetails=async()=>{
    return await commonAPI("GET",`${base_URL}/register`)
}


// export const registerForm=async(data)=>{
//     // http get request to http://localhost:5000/post for adding post in json server
//         //  and return response to home component
//         return await commonAPI("POST",`${base_URL}/signup`,data)
//     }


