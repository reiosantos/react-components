import React from 'react';
import './github-cards.css';

const Card = (props) => {
	return (
		<div style={{margin: '1em'}}>
			<img width={75} src={props.avatar_url} alt={''}/>
			<div className={'info'}>
				<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
				<div>{props.company}</div>
			</div>

		</div>
	);
};

const CardList = (props) => {
	return (
		<div>
			{props.cards.map((card, index) => <Card key={index} {...card}/>)}
		</div>
	);
};

export {CardList};
