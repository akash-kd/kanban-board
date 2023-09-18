import CircleIcon from '../../Icons/circle'
import './styles.css'
import UrgentIcon from '../../Icons/priority/urgent.jsx'
import HighIcon from '../../Icons/priority/high.jsx'
import MediumIcon from '../../Icons/priority/medium'
import LowIcon from '../../Icons/priority/low'

import { useState } from 'react'

export default function Card({ id, user_id, title, status, priority, tag, from}) {
	let avatar
	let priorityElem
	if (user_id === 'usr-1') {
		avatar = <img className='avatar' src='user1.png' alt='avatar' />
	} else if (user_id === 'usr-2') {
		avatar = <img className='avatar' src='user2.png' alt='avatar' />
	} else if (user_id === 'usr-3') {
		avatar = <img className='avatar' src='user3.png' alt='avatar' />
	} else if (user_id === 'usr-3') {
		avatar = <img className='avatar' src='user4.png' alt='avatar' />
	} else if (user_id === 'usr-5') {
		avatar = <img className='avatar' src='user5.png' alt='avatar' />
	}

	if (priority === 4) priorityElem = <UrgentIcon />
	else if (priority === 3) priorityElem = <HighIcon />
	else if (priority === 2) priorityElem = <MediumIcon />
	else if (priority === 1) priorityElem = <LowIcon />

	const [isDragging, setIsDragging] = useState(false)

	function handleDragStart(e) {
		console.log('sss')
		setIsDragging(true)
		const data = JSON.stringify({ type: 'card', from: from})
		e.dataTransfer.setData('text/plain', data)
	}

	function handleDragEnd(e) {
		console.log('eeee')
		setIsDragging(false)
		e.dataTransfer.clearData()
	}

	return (
		<div
			className='card-main'
			draggable='true'
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			<div className='card-header'>
				<p className='card-title'>{id}</p>
				{avatar}
			</div>
			<div className='card-content'>{title}</div>
			<div className='card-footer'>
				<div className='feature'>
					<CircleIcon />
					<p>Feature Request</p>
				</div>
				{priorityElem}
			</div>
		</div>
	)
}
