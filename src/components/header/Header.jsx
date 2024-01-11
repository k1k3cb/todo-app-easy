import { HeaderContainer, HeaderContent, Image, Title } from './styles';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderContent>
				<Title>TODO</Title>
				<Image src='./assets/images/icon-moon.svg' alt='' />
			</HeaderContent>
		</HeaderContainer>
	);
};

export default Header;
