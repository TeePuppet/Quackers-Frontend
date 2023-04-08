
/** @type {import('./$types').RequestHandler} */
export const POST = (async (request) => {
    const postTitle = request;
    console.log(postTitle)
    // return postTitle
    // const description = await fetch(`https://us-central1-recenzii-c1726.cloudfunctions.net/generateDescription?title=${postTitle}`)
    // const resp = await description.json()
    return new Response("Test")

})