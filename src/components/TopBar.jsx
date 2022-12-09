import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/TopBar.scss';

const TopBar = () => {
	const [ isActive, setIsActive ] = useState(false);

	return (
		<div className='topbar' id={isActive ? 'open' : 'close'}>
			<div className='dropdown'>
				<button
					onClick={() => {
						setIsActive((prev) => !prev)
					}}
				>							
				</button>
			</div>
			<div className='toggle'>
				<Link to='/'>Home</Link>
				<Link to='/experience'>Experiences</Link>
				<Link to='/project'>Projects</Link>
				<Link to='/resume'>Resumes</Link>
				<Link to='/contact'>Contacts</Link>
			</div>
		</div>
	);
};

export default TopBar;
