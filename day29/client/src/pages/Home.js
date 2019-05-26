import React from 'react';

function Home() {
	document.title = 'Home | Simple MERN Stack';
	return (
		<div className='container text-center mt-3'>
			<img src='https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png' alt='home' width='550' />
		</div>
	);
}

export default Home;