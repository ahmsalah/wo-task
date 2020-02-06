const URL = 'https://wo-task-server.herokuapp.com/';

const fetchImages = async (resource, pageNum, query) => {
	const searchQuery = query ? `&q=${query}` : '';
	const page = `&_page=${pageNum}`;
	const limit = `_limit=${9}`;

	const response = await fetch(`${URL}${resource}?${limit}${page}${searchQuery}`);

	const images = await response.json();
	const count = response.headers.get('x-total-count');
	console.log(count, images);
	if (response.status > 400) {
		throw new Error(images.errors);
	}

	return { images, count };
};

export { fetchImages };
