import { Link, useRouteError } from 'react-router-dom';
import ErrorIcon from '@shared/assets/icons/errorIcon.svg?react';
import { RejectedDataType } from '@shared/types';

import classes from './Fallback.module.css';

export const Fallback = () => {
	const error = useRouteError();
	const knownError = error as RejectedDataType;

	return (
		<div
			role="alert"
			className={classes.fallback}>
			<ErrorIcon className={classes.img} />
			<h1 className={classes.img}>Something went wrong</h1>
			<span className={classes.describe}>
				{knownError?.messageError} {knownError?.status}
			</span>
			<Link
				to="/"
				className={classes.link}>
				Go to home page
			</Link>
		</div>
	);
};
