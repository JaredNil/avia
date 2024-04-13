import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

import { routes } from 'shared/const/routes';

import cls from './Header.module.scss';

export const Header: React.FC = memo(() => {
	const { pathname } = useLocation();

	console.log(pathname);

	return (
		<div className={cls.header}>
			<div className={cls.header__logo}>
				<Link to="/">
					<span>LOGOTYPE</span>
				</Link>
			</div>
			<div className={cls.header__links}>
				{routes.map((route) => (
					<Link to={route.to} className={`${cls.route} ${pathname === route.to ? cls.route__active : ''}`}>
						{route.title}
					</Link>
				))}
				<RxHamburgerMenu className={cls.header__burger} />
			</div>
		</div>
	);
});
