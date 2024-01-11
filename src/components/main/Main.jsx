import { v4 } from 'uuid';
import Form from '../form/Form';
import TaskContainer from '../task-container/TaskContainer';
import { MainContainer } from './styles';
import { useState } from 'react';
import Filters from '../filters/Filters';

const Main = () => {
	const [tasks, setTasks] = useState([
		{
			id: v4(),
			taskName: 'Hacer Todo',
			completed: false
		},
		{
			id: v4(),
			taskName: 'Deshacer Todo',
			completed: false
		}
	]);
	const [filter, setFilter] = useState('All');
	const filteredTask = filterFunction(filter, tasks);

	return (
		<MainContainer>
			<Form tasks={tasks} setNewTask={setTasks} />
			<TaskContainer tasks={filteredTask} setTasks={setTasks} />
			<Filters filter={filter} setFilter={setFilter} />
		</MainContainer>
	);
};

const filterFunction = (filter, tasks) => {
	// console.log('filter from filterFunction ', filter);

	switch (filter) {
		case 'All':
			return tasks;
		case 'Active':
			return tasks.filter(task => !task.completed);
		case 'Completed':
			return tasks.filter(task => task.completed);
		default:
			return tasks;
	}
};

export default Main;
