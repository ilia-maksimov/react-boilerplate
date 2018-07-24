import * as React from 'react';
import { connect } from 'react-redux';
import * as styles from './new-job.styles.scss';

interface Props {
}

class NewJobContainer extends React.Component<Props, undefined> {
	render(): JSX.Element {
		return (
			<section className = { styles.mainContent }>
				<div>Hello from new job!</div>
			</section>
		);
	}
}

const mapStateToProps = () => {
	return {
	 };
};

export default connect(mapStateToProps)(NewJobContainer);
