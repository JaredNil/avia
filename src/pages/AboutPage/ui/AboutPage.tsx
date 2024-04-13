import Title from 'shared/ui/Title/Title';
import dir1 from 'shared/assets/dir1.jpg';
import dir2 from 'shared/assets/dir2.png';
import dir3 from 'shared/assets/dir3.png';
import dir4 from 'shared/assets/dir4.jpeg';
import dir5 from 'shared/assets/dir5.png';

import cls from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
	console.log('AboutPage RENDER ---');

	return (
		<>
			<div className={cls.about__title}>
				<Title>Направления обучения</Title>
			</div>
			<div className={cls.direct}>
				<div className={cls.direct__block}>
					<img src={dir1} alt="direct_name" className={cls.direct__image} />
					<div className={cls.direct__title}>Авиамодельный класс</div>
					<div className={cls.direct__text}>
						Изготовление моделей самолетов: Свободнолетающих Кордовых Радиоуправляемых Навыки пилотирования моделями.
					</div>
					<div className={cls.direct__title}>
						Преподаватель: <span>Терещенко А.Н.</span>
					</div>
					<div className={cls.direct__text}>
						Запись на занятия: <br />
						понедельник с 17:30-18:30 <br />
						среда с 17:30-18:30 <br />
						пятница с 17:30-18:30 <br />
						занятия в индивидуальном режиме
					</div>
				</div>
				<div className={cls.direct__block}>
					<img src={dir2} alt="direct_name" className={cls.direct__image} />
					<div className={cls.direct__title}>Ракетомодельный класс</div>
					<div className={cls.direct__text}>Изготовление и запуск ракет разных классов</div>
					<div className={cls.direct__title}>
						Преподаватель: <span>Бубнов С.Н.</span>
					</div>
					<div className={cls.direct__text}>
						Запись на занятия: <br />
						понедельник с 17:30-19:00 <br />
						среда с 17:30-19:00 <br />
						пятница с 17:30-19:00 <br />
					</div>
				</div>
				<div className={cls.direct__block}>
					<img src={dir3} alt="direct_name" className={cls.direct__image} />
					<div className={cls.direct__title}>Дрон-рейсинг</div>
					<div className={cls.direct__text}>
						Конструирование, сборка, программирование FPV-дронов. Подготовка FPV-пилотов Прохождение трассы для гонок FPV-дронов.
					</div>
					<div className={cls.direct__title}>
						Преподаватель: <span>Изосимов А.Г.</span>
					</div>
					<div className={cls.direct__text}>
						Запись на занятия: <br />
						понедельник с 17:00-19:00 <br />
						среда с 17:00-19:00 <br />
						пятница с 17:00-19:00 <br />
						занятия в индивидуальном режиме
					</div>
				</div>
				<div className={cls.direct__block}>
					<img src={dir4} alt="direct_name" className={cls.direct__image} />
					<div className={cls.direct__title}>Судомодельный класс</div>
					<div className={cls.direct__text}>Изготовление плавающих моделей кораблей, подводных лодок, беспилотных водных аппаратов</div>
					<div className={cls.direct__title}>
						Преподаватель: <span>Воробьев Б.П.</span>
					</div>
					<div className={cls.direct__text}>
						Запись на занятия: <br />
						понедельник с 17:30-19:00 <br />
						среда с 17:30-19:00 <br />
						пятница с 17:30-19:00
					</div>
				</div>
				<div className={cls.direct__block}>
					<img src={dir5} alt="direct_name" className={cls.direct__image} />
					<div className={cls.direct__title}>Студия керамики</div>
					<div className={cls.direct__text}>Обожженные керамические изделия от задумки до воплощения, своими руками под руководством опытного</div>
					<div className={cls.direct__title}>
						Преподаватель: <span>Черкез Е.В.</span>
					</div>
					<div className={cls.direct__text}>
						Запись на занятия: <br />
						среда с 10:00-12:00 и 16:00-18:00 <br />
						воскресенье с 11:30-19:00 <br />
						(4 группы по возростам)
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
