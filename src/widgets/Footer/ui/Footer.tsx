import { memo } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoMailOpenOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';

import sigmaImage from 'shared/assets/sigma.png';

import { routes } from 'shared/const/routes';
import cls from './Footer.module.scss';

export const Footer: React.FC = memo(() => {
	return (
		<div className={cls.footer}>
			<div className={cls.preview}>
				<div className={cls.preview__image}>
					<img src={sigmaImage} alt="sigma" />
				</div>
				<div className={cls.preview__adress}>ул. Макаренко, 11</div>
			</div>
			<nav className={cls.navigation}>
				<div className={cls.navigation__title}>Навигация</div>
				<div className={cls.navigation__blocks}>
					<div className={`${cls.navigation__block} ${cls.first_col}`}>
						<span className={cls.route}>
							<Link to="/">Главная</Link>
						</span>
						<span className={cls.route}>
							<Link to={routes[0].to}>{routes[0].title}</Link>
						</span>
						<span className={cls.route}>
							<Link to={routes[1].to}>{routes[1].title}</Link>
						</span>
					</div>
					<div className={`${cls.navigation__block} ${cls.second_col}`}>
						<span className={cls.route}>
							<Link to={routes[2].to}>{routes[2].title}</Link>
						</span>
						<span className={cls.route}>
							<Link to={routes[3].to}>{routes[3].title}</Link>
						</span>
						<span className={cls.route}>
							<Link to={routes[4].to}>{routes[4].title}</Link>
						</span>
					</div>
					<div className={cls.navigation__block}>
						<div className={cls.navigation__contact}>Контакты:</div>
						<a href="tel:+79148881891" className={cls.navigation__phone}>
							<FaPhone size={16} width={16} height={16} />
							<span>+7 914 888 18 91</span>
						</a>
						<a href="mailto:sigma.avia@gmail.соm" className={cls.navigation__mail}>
							<IoMailOpenOutline size={16} width={16} height={16} />
							<span>sigma.avia@gmail.соm</span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
});
