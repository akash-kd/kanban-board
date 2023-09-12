import './styles.css'
import Backlog from '../../Icons/status/backlog.jsx'
import InProgressIcon from '../../Icons/status/inProgress.jsx'
import NotComplete from '../../Icons/status/notCompleted.jsx'
import Done from '../../Icons/status/done.jsx'
import None from '../../Icons/status/none.jsx'
import Add from '../../Icons/add'
import MenuIcon from '../../Icons/menu'

import UrgentIcon from '../../Icons/priority/urgent.jsx'
import HighIcon from '../../Icons/priority/high.jsx'
import MediumIcon from '../../Icons/priority/medium.jsx'
import LowIcon from '../../Icons/priority/low.jsx'
import NoneIcon from '../../Icons/priority/none.jsx'

export default function StatusHeader({ type, user_id, users }) {
	let avatar
	let user
	if (user_id === 'usr-1') {
		avatar = <img className='avatar' src='user1.png' alt='avatar' />
	} else if (user_id === 'usr-2') {
		avatar = <img className='avatar' src='user2.png' alt='avatar' />
	} else if (user_id === 'usr-3') {
		avatar = <img className='avatar' src='user3.png' alt='avatar' />
	} else if (user_id === 'usr-4') {
		avatar = <img className='avatar' src='user4.png' alt='avatar' />
	} else if (user_id === 'usr-5') {
		avatar = <img className='avatar' src='user5.png' alt='avatar' />
	}

	if (type === 'user') {
		user = users.find((obj) => obj.id === user_id)
	}

	if (type === 'user') {
		return (
			<div className='status-header pad-2'>
				<div className='status-main'>
					{avatar}
					<p>{user.name}</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'p-urgent') {
		return (
			<div className='status-header pad-2'>
				<div className='status-main'>
					<UrgentIcon />
					<p>Urgent</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'p-high') {
		return (
			<div className='status-header pad-2'>
				<div className='status-main'>
					<HighIcon />
					<p>High</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'p-medium') {
		return (
			<div className='status-header pad-2'>
				<div className='status-main'>
					<MediumIcon />
					<p>Medium</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'p-low') {
		return (
			<div className='status-header pad-2'>
				<div className='status-main'>
					<LowIcon />
					<p>Low</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'p-none') {
		return (
			<div className='status-header pad-2'>
				<div className='status-main'>
					<NoneIcon />
					<p>None</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'backlog') {
		return (
			<div className='status-header'>
				<div className='status-main'>
					<Backlog />
					<p>Backlog</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}
	if (type === 'inprogress') {
		return (
			<div className='status-header'>
				<div className='status-main'>
					<InProgressIcon />
					<p>In Progress</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'todo') {
		return (
			<div className='status-header'>
				<div className='status-main'>
					<NotComplete />
					<p>Todo</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'done') {
		return (
			<div className='status-header'>
				<div className='status-main'>
					<Done />
					<p>Completed</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'canceled') {
		return (
			<div className='status-header'>
				<div className='status-main'>
					<Done />
					<p>Completed</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}

	if (type === 'none') {
		return (
			<div className='status-header'>
				<div className='status-main'>
					<None />
					<p>None</p>
				</div>
				<div className='status-icons'>
					<Add />
					<MenuIcon />
				</div>
			</div>
		)
	}
}
