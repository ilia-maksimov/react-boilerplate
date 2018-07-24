import * as React from 'react';
import * as styles from './dashboard.styles.scss';
import { connect } from 'react-redux';

interface Props {
	onRequestCurrentJobs: () => void;
	currentJobs: JSON | {};
	loading: boolean;
}

export class Dashboard extends React.Component<Props, undefined> {

	public render(): JSX.Element {
		return (
			<div className = { styles.boards_area }>
				<div>Hello from Dasboard!</div>
			</div>
		);
	}
}

export const mapStateToProps = () => {
	return {
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
