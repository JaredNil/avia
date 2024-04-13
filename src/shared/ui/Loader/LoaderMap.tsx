/* eslint-disable jsx-a11y/media-has-caption */
import pedro from 'shared/assets/PEDRO_DONE.webm';
import cls from './Loader.module.scss';

export const LoaderMap = () => {
	return (
		<div className={cls.LoaderMap}>
			<div className={cls.square}>
				<div className={cls.video}>
					<video src={pedro} playsInline autoPlay muted loop />
				</div>
			</div>
		</div>
	);
};
