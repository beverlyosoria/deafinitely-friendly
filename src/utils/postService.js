async function createPost(options) {
	try {
		const sendPost = await fetch('/api/posts/create', options);
		const postResults = await sendPost.json();
		return await postResults;
	} catch (error) {
		console.log(error);
	}
}

async function getPost(options) {
	try {
		const sendPost = await fetch('/api/posts/all', options);
		const postResults = await sendPost.json();
		return await postResults;
	} catch (error) {
		console.log(error);
	}
}

async function createReview(options) {
	try {
		const sendReview = await fetch('/api/reviews/create', options);
		const reviewResult = await sendReview.json();
		return await reviewResult;
	} catch (error) {
		console.log(error);
	}
}

async function getReviews(options) {
	try {
		const sendPost = await fetch('/api/reviews/all', options);
		const postResults = await sendPost.json();
		return await postResults;
	} catch (error) {
		console.log(error);
	}
}

export default {
	createReview,
	createPost,
	getPost,
	getReviews
};
