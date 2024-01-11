import styled from 'styled-components';

export const HeaderContainer = styled.div`
	height: 300px;
	padding: 3rem 1.5rem;
	background-image: url('/assets/images/bg-mobile-dark.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (width>= 768px) {
		background-image: url('/assets/images/bg-desktop-dark.jpg');
	}
	
`;

export const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 330px;
	margin-left: auto;
	margin-right: auto;

	
`;

export const Title = styled.h1`
	margin: 0;
	color: #fff;
	
`;

export const Image = styled.img`
	width: 20px;
	cursor: pointer;
`;
