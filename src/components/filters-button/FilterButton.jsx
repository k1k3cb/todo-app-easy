import { StyledButton } from './styles';

const FilterButton = ({ text, active, onClick }) => {
	return (
		<StyledButton $active={active} onClick={onClick}>
			{text}
		</StyledButton>
	);
};

export default FilterButton;
