import { FaPhone } from 'react-icons/fa6';
import { IoMailOpenOutline } from 'react-icons/io5';
import { Map, YMaps } from '@pbe/react-yandex-maps';
import Title from 'shared/ui/Title/Title';

import cls from './ContactPage.module.scss';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoaderMap } from 'shared/ui/Loader/LoaderMap';

const ContactPage: React.FC = () => {
	console.log('ContactPage RENDER ---');

	return (
		<>
			<Title>Контакты</Title>
			<div className={cls.contact}>
				<div className={cls.contact__bar}>
					<div className={cls.contact__text}>664046, город Иркутск,</div>
					<div className={cls.contact__text}>улица Макаренко 6</div>
					<a href="tel:+79148881891" className={cls.contact__phone}>
						<FaPhone />
						<span>+7 914 888 18 91</span>
					</a>
					<a href="mailto:sigma.avia@gmail.соm" className={cls.contact__mail}>
						<IoMailOpenOutline />
						<span>sigma.avia@gmail.соm</span>
					</a>
					<div className={cls.contact__text}>
						<span>Часы работы</span>:
					</div>
					<div className={cls.contact__text}>ежедневно с 8:00 до 19:00</div>
				</div>
				<div className={cls.contact__map}>
					<YMaps>
						<LoaderMap />
						<Map
							width="100%"
							height="100%"
							//
							defaultState={{ center: [52.364589, 104.154914], zoom: 12 }}
						/>
					</YMaps>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
