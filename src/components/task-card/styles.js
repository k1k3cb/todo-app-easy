import styled from 'styled-components';

export const StyledTaskContent = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 3rem;
	padding: 1rem 1.25rem;
	border-bottom: 1px solid rgba(151, 151, 151, 0.3);
	cursor: pointer;
`;

export const StyledLabel = styled.label`
	text-decoration: ${({ $taskCompleted }) =>
		$taskCompleted ? 'line-through' : 'none'};
	color: ${({ $taskCompleted }) => ($taskCompleted ? '#9092a5' : 'none')};
`;
