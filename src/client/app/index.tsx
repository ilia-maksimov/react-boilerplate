import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { configureStore } from './store/configureStore';
import './common.styles.scss';
import 'codemirror/lib/codemirror.css';
import 'react-select/dist/react-select.css';

import App from './containers/app/app.container';

const history = createHistory();
const store = configureStore(history);

const root = document.getElementById('root');

ReactDOM.render(
	<Provider store = { store }>
		<ConnectedRouter history = { history }>
			<App />
		</ConnectedRouter>
	</Provider>, root
);
