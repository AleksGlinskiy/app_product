import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import "./styles/index.scss";

const App = () => {

	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Theme {theme}</button>

			<nav>
				<ul>
					<li><Link to="/">Главная</Link></li>
					<li><Link to="/about">О компании</Link></li>
				</ul>
			</nav>

			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;