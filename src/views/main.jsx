import './styles.css'
import StatusHeader from '../components/StatusHeader/statusheader'
import Card from '../components/Card/Card'
import { useState } from 'react'

export default function MainView({ data, state, card, moveCard }) {
	let inprogress = []
	let todo = []
	let backlog = []
	let done = []
	let none = []

	data.tickets.forEach((elem) => {
		if (elem.status === 'Todo') todo.push(elem)
		else if (elem.status === 'In progress') inprogress.push(elem)
		else if (elem.status === 'Backlog') backlog.push(elem)
		else if (elem.status === 'Complete') done.push(elem)
		else if (elem.status === 'Cancelled') none.push(elem)
	})

	if (state.ordering === 'default') {
		inprogress = inprogress.slice().sort((a, b) => b.priority - a.priority)
		todo = todo.slice().sort((a, b) => b.priority - a.priority)
		backlog = backlog.slice().sort((a, b) => b.priority - a.priority)
		done = done.slice().sort((a, b) => b.priority - a.priority)
		none = none.slice().sort((a, b) => b.priority - a.priority)
	} else {
		inprogress = inprogress.slice().sort((a, b) => {
			const nameA = a.title.toLowerCase()
			const nameB = b.title.toLowerCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0
		})

		todo = todo.slice().sort((a, b) => {
			const nameA = a.title.toLowerCase()
			const nameB = b.title.toLowerCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0
		})

		backlog = backlog.slice().sort((a, b) => {
			const nameA = a.title.toLowerCase()
			const nameB = b.title.toLowerCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0
		})

		done = done.slice().sort((a, b) => {
			const nameA = a.title.toLowerCase()
			const nameB = b.title.toLowerCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0
		})

		none = none.slice().sort((a, b) => {
			const nameA = a.title.toLowerCase()
			const nameB = b.title.toLowerCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0
		})

		inprogress = inprogress.slice().sort((a, b) => {
			const nameA = a.title.toLowerCase()
			const nameB = b.title.toLowerCase()
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0
		})
	}

	const [s, setS] = useState({ a: [1], b: [4] })

	const [to, setTo] = useState()

	function handleDragOverA(e) {
		if (e.dataTransfer.types[0] === 'text/plain') {
			setTo('a')
			e.preventDefault()
		}
	}
	function handleDragOverB(e) {
		if (e.dataTransfer.types[0] === 'text/plain') {
			setTo('b')
			e.preventDefault()
		}
	}

	function handleDrop(e) {
		const dataJSON = e.dataTransfer.getData('text/plain')
		let data
		try {
			data = JSON.parse(dataJSON)
		} catch {}
		if (data && data.type === 'card') {
			console.log('PLease Work', data.from, to)
			move(data.from, to)
		}
	}

	function move(from, to) {
		if (from == 'a' && to == 'b') {
			setS({ a: [], b: [4,1] })
		}
		if (from == 'b' && to == 'a') {
			setS({ a: [4,1], b: [] })
		}
	}

	console.log(s)
	return (
		<div className='main-view'>
			<div
				className='main-col first'
				onDragOver={handleDragOverA}
				onDrop={handleDrop}
			>
				<StatusHeader type='backlog' />
				{s.a.map((item) => (
					<Card title={item} id={item} from={'a'} />
				))}
			</div>
			<div
				className='main-col first'
				onDragOver={handleDragOverB}
				onDrop={handleDrop}
			>
				<StatusHeader type='backlog' />

				{s.b.map((item) => (
					<Card title={item} id={item} from={'b'} />
				))}
			</div>
		</div>
	)
}
