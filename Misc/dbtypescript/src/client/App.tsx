import * as React from 'react';
import { userInfo } from 'os';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			users: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/users');
			let users = await r.json();
			this.setState({ users });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">My DB</h1>
				<ul className="list-group">
				{this.state.users.map(user =>{
					return <li className="list-group-item">{user.name}</li>
				})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	users: Array<{name: string}>;
}

export default App;
