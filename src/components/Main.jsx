import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';

const Main = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project' element={<Project />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
};

export default Main;
