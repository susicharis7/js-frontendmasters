async function fetchResponse(url) {
    const response = await fetch(url);
    return response;  /* JS gleda ovo ovako : return Promise.resolve(response); */
}

fetchResponse("youtube.com"); 
/* 
    Ovo ce nam vratiti Promise<pending>
    Zato sto je async funkcija, bez obzira sto unutra imamo await za fetch(url)
    SVAKA ASYNC FUNKCIJA UVIJEK VRACA PROMISE 

*/