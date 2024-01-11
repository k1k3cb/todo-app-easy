import FilterButton from '../filters-button/FilterButton';
import { StyledContainer } from './styles';

const Filters = ({ filter, setFilter }) => {
	return (
		<StyledContainer>
			<FilterButton
				text={'All'}
				active={filter === 'All'}
				onClick={() => handleFilterClick('All', setFilter)}
			/>
			<FilterButton
				text={'Active'}
				active={filter === 'Active'}
				onClick={() => handleFilterClick('Active', setFilter)}
			/>
			<FilterButton
				text={'Completed'}
				active={filter === 'Completed'}
				onClick={() => handleFilterClick('Completed', setFilter)}
			/>
		</StyledContainer>
	);
};

const handleFilterClick = (newFilter, setFilter) => {
	setFilter(newFilter);
};

export default Filters;
