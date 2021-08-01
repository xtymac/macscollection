import React from 'react';
import classes from './Header.module.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: window.location.hash === '#JP' ? 'JP' : 'EN'
		};
	}

	changeLang = (lang) => {
		window.location.hash = `#${lang}`;
		window.location.reload();
	};

	render() {
		const {text} = this.state;
		return (
			<div className={classes.btnWrap}>
				<div className={classes.networkTab}>
					{text}
				</div>
				<ul>
					<li onClick={this.changeLang.bind(this, 'EN')}>English</li>
					<li onClick={this.changeLang.bind(this, 'JP')}>日本語</li>
				</ul>
			</div>
		);
	}
}
