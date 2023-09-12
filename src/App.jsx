import Header from './components/Header/Header.jsx'
import MainView from './views/main.jsx'
import UserView from './views/user.jsx'
import PriorityView from './views/priority.jsx'
import { useEffect, useState } from 'react'
import Card from './components/Card/Card.jsx'

export default function App() {
	const [data, setData] = useState({
		tickets: [],
		users: [],
	})
	const [state, setState] = useState(
		JSON.parse(localStorage.getItem('state')) || {
			grouping: 'default',
			ordering: 'default',
		},
	)
	console.log(JSON.parse(localStorage.getItem('state')))
	useEffect(() => {
		fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				console.log('FETCh', response.json())
				return response.json() // Parse the response body as JSON
			})
			.then((data) => {
				// Handle the data here
				console.log('FETCh', data)
				setData(data)
			})
			.catch((error) => {
				// Handle errors here
				console.error('Fetch error:', error)
			})
	}, [])
	console.log('DATA', data)
	return (
		<div className='main'>
			<Header state={state} setState={setState} />
			<div className='main-content'>
				{state.grouping === 'default' ? (
					<MainView data={data} state={state} />
				) : state.grouping === 'user' ? (
					<UserView data={data} state={state} />
				) : (
					<PriorityView data={data} state={state} />
				)}
			</div>
		</div>
	)
}
