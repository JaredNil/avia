/* eslint-disable jsx-a11y/img-redundant-alt */
import { Map, YMaps } from '@pbe/react-yandex-maps';

import slide1 from 'shared/assets/slide1.webp';

import { FaPhone } from 'react-icons/fa6';
import { IoMailOpenOutline } from 'react-icons/io5';
import Title from 'shared/ui/Title/Title';
import cls from './SkillsPage.module.scss';

const SkillsPage: React.FC = () => {
	console.log('MAIN PAGE RENDER ---');

	return (
		<>
			<Title>О нашем центре</Title>
			<div className={cls.pageText}>
				<p>
					Центр технического творчества "Сигма" предлагает уникальную возможность окунуться в увлекательный мир техники. Ребята познакомятся с азами
					аэродинамики, конструирования, научиться работать с инструментами и на станках, создадут свои первые модели самолетов, ракет и научат их
					летать. Современное, увлекательное направление Дрон-рейсинг подарит непередаваемые ощущения "полета от первого лица" - это полет
					квадрокоптера и видео полета в FPV-шлеме пилота.
				</p>
				<p>
					Дети узнают, как создавать модели кораблей. А в честной спортивной борьбе на соревнованиях определится сильнейший. Не менее увлекательными
					станут занятия по лепке из глины, на которых маленькие творцы воплотить свои фантазии в материале. Занятия в кружках "Сигмы" раскроют
					творческий потенциал юных дарований, подарят радость созидания и энергию спортивной борьбы.
				</p>
			</div>

			<Title>ЦТТ "Сигма" это</Title>
			<div className={cls.blocks}>
				<div className={cls.block__line}>
					<div className={cls.block}>
						<span>Старейший технический центр г. Иркутска, история длиной в 85 лет</span>
					</div>
					<div className={cls.block}>
						<span>Современные направления технического спорта</span>
					</div>
				</div>
				<div className={cls.block__line}>
					<div className={cls.block}>
						<span>Опытные педагоги и технически грамотные специалисты в одном лице</span>
					</div>
					<div className={cls.block}>
						<span>Современная материально-техническая база и учебные классы</span>
					</div>
				</div>
			</div>

			<Title>Действующие направления</Title>
			<div className={cls.direct}>
				<div className={cls.direct__block}>
					<img src={slide1} alt="фото" />
					<div className={cls.direct__block_title}>Класс судомоделирования</div>
					<div className={cls.direct__block_description}>Описание</div>
				</div>
				<div className={cls.direct__block}>
					<img src={slide1} alt="фото" />
					<div className={cls.direct__block_title}>Класс авиамоделирования</div>
					<div className={cls.direct__block_description}>Описание</div>
				</div>
				<div className={cls.direct__block}>
					<img src={slide1} alt="фото" />
					<div className={cls.direct__block_title}>Класс дрон-рейсинга</div>
					<div className={cls.direct__block_description}>Описание</div>
				</div>
				<div className={cls.direct__block}>
					<img src={slide1} alt="фото" />
					<div className={cls.direct__block_title}>Класс лепки</div>
					<div className={cls.direct__block_description}>Описание</div>
				</div>
			</div>

			<Title>Наш адрес</Title>
			<div className={cls.map}>
				<YMaps>
					<Map width="100%" height={280} defaultState={{ center: [52.364589, 104.154914], zoom: 12 }} />
				</YMaps>
			</div>

			<Title>Узнать больше</Title>

			<div className={cls.contact}>
				<div className={cls.contact__wrapper}>
					<div className={cls.contact__title}>Узнайте больше о наших занятиях</div>
					<div className={cls.contact__text}>получите консультацию и запишитесь на занятия</div>
					<a href="tel:+79148881891" className={cls.contact__phone}>
						<FaPhone />
						<span>+7 914 888 18 91</span>
					</a>
					<a href="mailto:sigma.avia@gmail.соm" className={cls.contact__mail}>
						<IoMailOpenOutline />
						<span>sigma.avia@gmail.соm</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default SkillsPage;
