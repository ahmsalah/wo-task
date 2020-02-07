const URL = 'https://wo-task-server.herokuapp.com/';

const fetchImages = async (resource, pageNum, query, categoryId) => {
	const searchQuery = query ? `&q=${query}` : '';
	const page = `&_page=${pageNum}`;
	const limit = `_limit=${9}`;
	const category = categoryId ? `&category=${categoryId}` : '';

	const response = await fetch(`${URL}${resource}?${limit}${page}${category}${searchQuery}`);

	const images = await response.json();
	const count = response.headers.get('x-total-count');

	if (response.status > 400) {
		throw new Error(images.errors);
	}

	return { images, count };
};

const fetchImageItem = async (resource, photoId) => {
	const response = await fetch(`${URL}${resource}/${photoId}`);
	const image = await response.json();

	if (response.status > 400) {
		throw new Error(image.errors);
	}
	return image;
};

export { fetchImages, fetchImageItem };
