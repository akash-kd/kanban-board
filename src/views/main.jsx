import './styles.css'
import StatusHeader from '../components/StatusHeader/statusheader'
import Card from '../components/Card/Card'
export default function MainView({ data, state }) {
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

	return (
		<div className='main-view'>
			<div className='main-col first'>
				<StatusHeader type='backlog' />
				{backlog.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
						priority={elem.priority}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='todo' />
				{inprogress.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
						priority={elem.priority}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='inprogress' />
				{inprogress.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
						priority={elem.priority}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='done' />
				{done.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
						priority={elem.priority}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='none' />
				{none.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
						priority={elem.priority}
					/>
				))}
			</div>
		</div>
	)
}
