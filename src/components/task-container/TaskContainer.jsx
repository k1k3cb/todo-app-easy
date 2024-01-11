import TaskCard from '../task-card/TaskCard';
import TaskFooter from '../task-footer/TaskFooter';
import { StyledContainer } from './styles';

const TaskContainer = ({ tasks, setTasks }) => {
	return (
		<StyledContainer>
			{tasks.map(task => (
				<TaskCard
					key={task.id}
					task={task}
					handleChangeCompleted={() =>
						handleChangeCompleted(tasks, setTasks, task.id)
					}
					handleClickDelete={() => handleClickDelete(tasks, setTasks, task.id)}
				/>
			))}
			<TaskFooter tasks={tasks} setTasks={setTasks} />
		</StyledContainer>
	);
};

const handleChangeCompleted = (tasks, setTasks, taskId) => {
	const tasksUpdated = tasks.map(task => {
		if (task.id === taskId) {
			task.completed = !task.completed;
		}
		return task;
	});
	setTasks(tasksUpdated);
};

const handleClickDelete = (tasks, setTasks, taskId) => {
	const tasksUpdated = tasks.filter(task => task.id !== taskId);
	setTasks(tasksUpdated);
};

export default TaskContainer;
