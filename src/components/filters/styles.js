import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 3rem;
	padding-inline: 5.0625rem;	
	background-color: ${COLORS.bgCards};
	border-radius: 0.3125rem;

	@media screen and (width>= 768px) {
		width: 33.75rem;
	}
`;
