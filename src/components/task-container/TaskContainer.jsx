import TaskCard from '../task-card/TaskCard';
import TaskFooter from '../task-footer/TaskFooter';
import {  StyledContainer } from './styles';

const TaskContainer = ({ tasks,setTasks }) => {
	return (
		<StyledContainer>
			{tasks.map(task => (
				<TaskCard key={task.id} tasks={tasks} taskName={task.taskName} completed={task.completed} taskId={task.id} setTasks={setTasks}/>
			))}
			<TaskFooter tasks={tasks} setTasks={setTasks} />
		</StyledContainer>
	);
};

export default TaskContainer;
