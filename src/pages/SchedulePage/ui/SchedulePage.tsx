import Title from 'shared/ui/Title/Title';
import schedulePhoto from 'shared/assets/schedule.webp';
import cls from './SchedulePage.module.scss';

const SchedulePage: React.FC = () => {
	console.log('SchedulePage RENDER ---');

	return (
		<>
			<div className={cls.schedule__title}>
				<Title>Расписание</Title>
			</div>
			<div className={cls.schedule}>
				<img src={schedulePhoto} alt="schedule" />
			</div>
		</>
	);
};

export default SchedulePage;
