import Header from './components/Header/Header.jsx'
import MainView from './views/main.jsx'
import UserView from './views/user.jsx'
import PriorityView from './views/priority.jsx'
import { useEffect, useState } from 'react'
import Card from './components/Card/Card.jsx'

export default function App() {
	const [data, setData] = useState({
		tickets: [
			{
				id: 'CAM-1',
				title: 'Update User Profile Page UI',
				tag: ['Feature request'],
				userId: 'usr-1',
				status: 'Todo',
				priority: 4,
			},
			{
				id: 'CAM-2',
				title: 'Add Multi-Language Support - Enable multi-language support within the application.',
				tag: ['Feature Request'],
				userId: 'usr-2',
				status: 'In progress',
				priority: 3,
			},
			{
				id: 'CAM-3',
				title: 'Optimize Database Queries for Performance',
				tag: ['Feature Request'],
				userId: 'usr-2',
				status: 'In progress',
				priority: 1,
			},
			{
				id: 'CAM-4',
				title: 'Implement Email Notification System',
				tag: ['Feature Request'],
				userId: 'usr-1',
				status: 'In progress',
				priority: 3,
			},
			{
				id: 'CAM-5',
				title: 'Enhance Search Functionality',
				tag: ['Feature Request'],
				userId: 'usr-5',
				status: 'In progress',
				priority: 0,
			},
			{
				id: 'CAM-6',
				title: 'Third-Party Payment Gateway',
				tag: ['Feature Request'],
				userId: 'usr-2',
				status: 'Todo',
				priority: 1,
			},
			{
				id: 'CAM-7',
				title: 'Create Onboarding Tutorial for New Users',
				tag: ['Feature Request'],
				userId: 'usr-1',
				status: 'Backlog',
				priority: 2,
			},
			{
				id: 'CAM-8',
				title: 'Implement Role-Based Access Control (RBAC)',
				tag: ['Feature Request'],
				userId: 'usr-3',
				status: 'In progress',
				priority: 3,
			},
			{
				id: 'CAM-9',
				title: 'Upgrade Server Infrastructure',
				tag: ['Feature Request'],
				userId: 'usr-5',
				status: 'Todo',
				priority: 2,
			},
			{
				id: 'CAM-10',
				title: 'Conduct Security Vulnerability Assessment',
				tag: ['Feature Request'],
				userId: 'usr-4',
				status: 'Backlog',
				priority: 1,
			},
		],
		users: [
			{ id: 'usr-1', name: 'Anoop sharma', available: false },
			{ id: 'usr-2', name: 'Yogesh', available: true },
			{ id: 'usr-3', name: 'Shankar Kumar', available: true },
			{ id: 'usr-4', name: 'Ramesh', available: true },
			{ id: 'usr-5', name: 'Suresh', available: true },
		],
	})
	const [state, setState] = useState(
		JSON.parse(localStorage.getItem('state')) || {
			grouping: 'default',
			ordering: 'default',
		},
	)
	console.log(JSON.parse(localStorage.getItem('state')))
	useEffect(() => {
		//   fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
		//   .then(response => {
		//     if (!response.ok) {
		//       throw new Error('Network response was not ok');
		//     }
		//     console.log("FETCh",response.json());
		//     return response.json(); // Parse the response body as JSON
		//   })
		//   .then(data => {
		//     // Handle the data here
		//     console.log("FETCh",data);
		//     setData(data);
		//   })
		//   .catch(error => {
		//     // Handle errors here
		//     console.error('Fetch error:', error);
		//   });
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
