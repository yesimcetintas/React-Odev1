
import axios from "axios"

export async function getData(userId){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user=response.data

    const responsePost= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    const posts=responsePost.data[0]
    console.log('a');
    user.posts=posts

    
}
    

