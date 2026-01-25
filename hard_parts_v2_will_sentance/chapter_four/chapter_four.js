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





/* Now we know that JS Code is not all "JS", a lot of it is from WEB API, ect.. */
function printHello() {
    console.log("Hello");
}

/* setTimeout is not JS function, it is a Web Browser feature that is injected into JS */
setTimeout(printHello, 1000);
console.log("Me First")


function printHi() {
    console.log("Hi");
}

function blockForOneSec() {
    // blocks in the JS thread for 1 sec
}

setTimeout(printHi, 0);
blockForOneSec();
console.log("Me first!");



/* Background feature callbacks are challenging for data handling */
let data;

setTimeout(() => {
    return 42; 
}, 1000);

console.log(data); // -> UNDEFINED 
/* It is undefined because the return in setTimeout means WEB API will get it, not JS */
