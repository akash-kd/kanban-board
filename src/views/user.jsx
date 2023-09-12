import './styles.css'
import StatusHeader from '../components/StatusHeader/statusheader'
import Card from '../components/Card/Card'
export default function UserView({ data, state }) {
	let conv_data = {}
	data.tickets.forEach((element) => {
		if (conv_data[element.userId] === undefined) {
			conv_data[element.userId] = []
		}
		conv_data[element.userId].push(element)
	})

	Object.keys(conv_data).map((item, idx) => {
		if (state.ordering === 'default') {
			conv_data[item] = conv_data[item]
				.slice()
				.sort((a, b) => b.priority - a.priority)
		} else {
			conv_data[item] = conv_data[item].slice().sort((a, b) => {
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
	})

	return (
		<div className='main-view'>
			{Object.keys(conv_data).map((item, idx) => (
				<div className={'main-col first'}>
					<StatusHeader
						type='user'
						user_id={item}
						users={data.users}
					/>
					{conv_data[item].map((elem) => (
						<Card
							title={elem.title}
							id={elem.id}
							priority={elem.priority}
						/>
					))}
				</div>
			))}
		</div>
	)
}
