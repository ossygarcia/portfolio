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
				<Link to='/experience'>Experience</Link>
				<Link to='/project'>Project</Link>
				<Link to='/resume'>Resume</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		</div>
	);
};

export default TopBar;
