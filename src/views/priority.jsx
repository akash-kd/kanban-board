import './styles.css'
import StatusHeader from '../components/StatusHeader/statusheader'
import Card from '../components/Card/Card'
export default function PriorityView({ data, state }) {
	let urgent = []
	let high = []
	let medium = []
	let low = []
	let none = []

	data.tickets.forEach((elem) => {
		if (elem.priority === 4) urgent.push(elem)
		else if (elem.priority === 3) high.push(elem)
		else if (elem.priority === 2) medium.push(elem)
		else if (elem.priority === 1) low.push(elem)
		else if (elem.priority === 0) none.push(elem)
	})

	if (state.ordering === 'default') {
		urgent = urgent.slice().sort((a, b) => b.priority - a.priority)
		high = high.slice().sort((a, b) => b.priority - a.priority)
		medium = medium.slice().sort((a, b) => b.priority - a.priority)
		low = low.slice().sort((a, b) => b.priority - a.priority)
		none = none.slice().sort((a, b) => b.priority - a.priority)
	} else {
		urgent = urgent.slice().sort((a, b) => {
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

		high = high.slice().sort((a, b) => {
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

		medium = medium.slice().sort((a, b) => {
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

		low = low.slice().sort((a, b) => {
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
	}

	return (
		<div className='main-view'>
			<div className='main-col first'>
				<StatusHeader type='p-urgent' />
				{urgent.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='p-high' />
				{high.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='p-medium' />
				{medium.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='p-low' />
				{low.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
					/>
				))}
			</div>
			<div className='main-col'>
				<StatusHeader type='p-none' />
				{none.map((elem) => (
					<Card
						title={elem.title}
						id={elem.id}
						user_id={elem.userId}
					/>
				))}
			</div>
		</div>
	)
}
