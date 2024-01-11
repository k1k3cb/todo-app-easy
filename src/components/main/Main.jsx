import { v4 } from 'uuid';
import Form from '../form/Form';
import TaskContainer from '../task-container/TaskContainer';
import { MainContainer } from './styles';
import { useState } from 'react';

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

	console.log(tasks);
	return (
		<MainContainer>
			<Form tasks={tasks} setNewTask={setTasks} />
			<TaskContainer tasks={tasks} setTasks={setTasks} />
		</MainContainer>
	);
};

export default Main;
