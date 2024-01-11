import styled from 'styled-components';

export const StyledFormContent = styled.form`
	position: relative;
	width: 327px;

	
	
`;

export const StyledLabel = styled.label`
	position: absolute;
	top: 0.8rem;
	left: 1.25rem;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid var(--text-color-completed);
`;

export const StyledImg = styled.img`
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 50%;
	border: 1px solid grey;
`;

export const StyledInput = styled.input`
	height: 3rem;
	width: 327px;
	padding-left: 3.5rem;
	margin-bottom: 1rem;
	color: #9495a5;
	background-color: #fff;
	border-radius: 0.4rem;
	border: none;
	outline: none;
	box-shadow: 0 15px 15px -5px rgba(170, 170, 170, 0.3);

	@media screen and (width>= 768px) {
		width: 33.75rem;
	}
`;
