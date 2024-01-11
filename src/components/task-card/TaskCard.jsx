import {  StyledLabel, StyledTaskContent } from './styles';

const TaskCard = ({ tasks, taskName, completed, taskId, setTasks }) => {
	return (
		<StyledTaskContent>
			<input
				type='checkbox'
				onChange={event =>
					handleChangeCompleted(event, setTasks, tasks, taskId)
				}
			/>
			<StyledLabel $taskCompleted={completed}>{taskName}</StyledLabel>
			<img
				src='assets/images/icon-cross.svg'
				alt='Delete'
				onClick={() => handleClickDelete(setTasks, tasks, taskId)}
			/>
		</StyledTaskContent>
	);
};

const handleChangeCompleted = (event, setTasks, tasks, taskId) => {
	const isCompleted = event.target.checked;
	setTasks(
		tasks.map(task =>
			task.id === taskId ? { ...task, completed: isCompleted } : task
		)
	);
};

const handleClickDelete = (setTasks, tasks, taskId) => {
	setTasks(tasks.filter(task => task.id !== taskId));
};

export default TaskCard;
