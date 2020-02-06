const URL = 'https://wo-task-server.herokuapp.com/';

const fetchImages = async resource => {
	const response = await fetch(`${URL}${resource}`);

	const data = await response.json();

	if (response.status > 400) {
		throw new Error(data.errors);
	}

	return data;
};

export { fetchImages };
