async function createPost(options) {
    try {
        const sendPost = await fetch('/api/posts/create', options)
        const postResults = await sendPost.json();
        return await postResults;
    } catch(error) {
        console.log(error)
    }
}

async function getPost(options) {
    try {
        const sendPost = await fetch('/api/posts/all', options)
        const postResults = await sendPost.json();
        return await postResults;
    } catch(error) {
        console.log(error)
    }
}

export default {
    createPost,
    getPost
}