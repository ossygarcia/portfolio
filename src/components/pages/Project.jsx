import React from 'react';
import { projects } from '../data';
import '../styles/Projects.scss';

const Project = () => {
	return (
		<div className='project'>
			<h1>Project</h1>
			{projects.map((project) => (
				<div className='card' key={project.id}>
					<h1>{project.image}</h1>
					<p>{project.title}</p>
					<p>{project.tools}</p>
				</div>
			))}
		</div>
	);
};

export default Project;
