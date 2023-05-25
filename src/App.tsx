import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

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
					<Route path="/" element={<MainPageAsync />} />
					<Route path="/about" element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;