import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledButton = styled.button`
	background: none;
	border: none;
	color: ${({ $active }) => ($active ? COLORS.active : COLORS.textColor)};
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
`;
