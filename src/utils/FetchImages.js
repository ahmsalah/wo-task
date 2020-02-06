const URL = 'https://wo-task-server.herokuapp.com/';

const fetchImages = async (resource, query) => {
	const response = await fetch(`${URL}${resource}${query ? '?q=' + query : ''}`);

	const data = await response.json();

	if (response.status > 400) {
		throw new Error(data.errors);
	}

	return data;
};

export { fetchImages };
