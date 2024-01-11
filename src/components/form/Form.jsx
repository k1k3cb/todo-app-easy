import { v4 } from 'uuid';
import { StyledFormContent, StyledImg, StyledInput, StyledLabel } from './styles';

const Form = ({ tasks, setNewTask }) => {
	return (
		<StyledFormContent
			onSubmit={event => handleSubmit(event, tasks, setNewTask)}
		>
			<StyledLabel>
				<StyledImg src='assets/images/icon-check.svg' alt='' />
			</StyledLabel>
			<StyledInput name='task' type='text' placeholder='Create a new todo...' />
		</StyledFormContent>
	);
};

const handleSubmit = (event, tasks, setNewTask) => {
	event.preventDefault();
	const task = event.target.elements.task.value;
	// console.log(event.target.elements);
	const newTask = {
		id: v4(),
		taskName: task,
		completed: false
	};
	setNewTask([...tasks, newTask]);
	event.target.reset();
};

export default Form;
