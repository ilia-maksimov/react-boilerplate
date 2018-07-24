import * as React from 'react';
import * as styles from './app.styles.scss';
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import { MainContent } from '../';

interface Props {
}

export class App extends React.Component<Props, undefined> {

	public render(): JSX.Element {
		return (
			<div className={ styles.mainWrapper }>
				<main className = { styles.wrapper }>
					<MainContent />
				</main>
			</div>
		);
	}
}

export const mapStateToProps = () => {
	return {
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {};
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(App));
