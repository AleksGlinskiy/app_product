import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";
import {TopPanel} from "widgets/TopPanel";

const App = () => {

	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Sidebar />
			<main className="content-page">
				<TopPanel />

				<div className="content-page__inner">
					<AppRouter />
				</div>
			</main>
		</div>
	);
};

export default App;