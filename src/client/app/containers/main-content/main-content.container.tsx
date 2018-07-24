import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as styles from './main-content.styles.scss';
import { Dashboard, NewJobContainer } from './../';

export class MainContent extends React.Component<undefined, undefined> {
		render(): JSX.Element {
				return (
					<section className = { styles.mainContent }>
						<Switch>
							<Route exact path = '/' component = { Dashboard } />
							<Route exact path = '/new_job' component = { NewJobContainer } />
						</Switch>
					</section>
				);
		}
}
