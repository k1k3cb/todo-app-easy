import { StyledClearSpan, StyledFooterContainer } from './styles';

const TaskFooter = ({ tasks, setTasks }) => {
	const itemsLeft = tasks.filter(task => !task.completed).length;
	console.log(itemsLeft);
	return (
		<StyledFooterContainer>
			{tasks.length === 0 && <span>No tasks</span>}
			{itemsLeft === 0 && tasks.length > 0 && <span>All tasks completed</span>}
			{itemsLeft >= 1 && (
				<span>
					{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left
				</span>
			)}

			<StyledClearSpan
				onClick={() => handleClickDeleteCompleted(tasks, setTasks)}
			>
				Clear Completed
			</StyledClearSpan>
		</StyledFooterContainer>
	);
};

const handleClickDeleteCompleted = (tasks, setTasks) => {
	const completedTasks = tasks.filter(task => !task.completed);
	setTasks(completedTasks);
};

export default TaskFooter;
