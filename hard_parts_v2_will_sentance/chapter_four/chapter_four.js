async function getUserPostStats() {
    try {
        const userResponse = await fetch("https://dummyjson.com/users/1");    
        const userData = await userResponse.json();

        const { id , firstName , lastName } = userData;

        const postsResponse = await fetch(`https://dummyjson.com/posts/user/${id}`);
        const postsData = await postsResponse.json();

        return {
            fullName: `${firstName} ${lastName}`,
            totalPosts: postsData.posts.length
        };


    } catch (error) {
        console.log("Something went wrong: " , error);
    }
}


getUserPostStats().then(result => console.log(result));