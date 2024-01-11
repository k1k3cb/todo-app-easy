import { StyledLabel, StyledTaskContent } from './styles';

const TaskCard = ({ task, handleChangeCompleted, handleClickDelete }) => {
	return (
		<StyledTaskContent>
			<input type='checkbox' onChange={handleChangeCompleted} />
			<StyledLabel $taskCompleted={task.completed}>{task.taskName}</StyledLabel>
			<img
				src='assets/images/icon-cross.svg'
				alt='Delete'
				onClick={handleClickDelete}
			/>
		</StyledTaskContent>
	);
};

export default TaskCard;
