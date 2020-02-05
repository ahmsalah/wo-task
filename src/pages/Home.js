import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.div`
	padding: 3rem 9rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	grid-gap: 3rem;
	align-items: start;
	@media ${props => props.theme.breakpoints.tablet} {
		padding: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		grid-column-gap: 6rem;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h3 {
		font-size: 1.7rem;
		font-weight: bold;
		margin: 1rem 0 1.5rem;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 25px;
		height: 50px;
	}
`;

function Home() {
	const [ photos, setPhotos ] = React.useState([]);
	React.useEffect(() => {
		const fetchPhotos = async () => {
			const res = await fetch('https://wo-task-server.herokuapp.com/photos');
			const data = await res.json();

			setPhotos(data);
		};

		fetchPhotos();
	}, []);

	return (
		<Layout>
			<Container>
				{photos.map(item => {
					return (
						<div key={item.id}>
							<img
								src={`https://i.picsum.photos/id/${item.id + 500}/250/250.jpg`}
								alt={item.title}
							/>
							<h3>{item.title}</h3>
						</div>
					);
				})}
			</Container>
		</Layout>
	);
}

export default Home;
