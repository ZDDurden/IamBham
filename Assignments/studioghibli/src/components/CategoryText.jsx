import React, { Component } from 'react';

const displayFields = {
	films: {
		text: [
			{ name: 'description', hideLabel: true },
			{ name: 'director' },
			{ name: 'producer' },
			{ name: 'release_date', label: 'Release Date' },
			{ name: 'rt_score', label: 'Rotten Tomatoes Score' }
		]
	},
	people: {
		text: [
			{ name: 'gender' },
			{ name: 'age' },
			{ name: 'eye_color', label: 'Eye Color' },
			{ name: 'hair_color', label: 'Hair color' }
		],
		links: ['film', 'species']
	},
};

export default class CategoryText extends Component {
	displayText() {
		let category = displayFields[this.props.category];
		let label = '';

		return category.text.map(currentField => {
			if (currentField.label && !currentField.hideLabel) {
				label = <label>{currentField.label}: </label>;
			} else if (!currentField.hideLabel) {
				let string =
					currentField.name.charAt(0).toUpperCase() +
					currentField.name.slice(1).toLowerCase();
				label = <label>{string}: </label>;
			}

			let text = this.props.item[currentField.name];

			if (text.length > 300 && this.props.excerpt) {
				text = text.substring(0, 300) + '...';
			}

			return (
				<p key={currentField.name}>
					{label}
					{text}
				</p>
			);
		});
	}

	render() {
		return <div>{this.displayText()}</div>;
	}
}
