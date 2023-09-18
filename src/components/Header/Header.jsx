import './styles.css'
import SettingIcons from '../../Icons/settings.jsx'
import DownArrow from '../../Icons/down-arrow.jsx'

import { useState } from 'react'
export default function Header({ state, setState }) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='header'>
			<button
				className='group-button'
				onClick={() => {
					setIsOpen(!isOpen)
				}}
			>
				<SettingIcons />
				Display
				<DownArrow />
			</button>
			- 1) Go to Display ->  Change Group by to: "Status", Works Limitedly, try moving 1 to 4. refresh again 4 to 1 now.
			{isOpen ? (
				<div className='header-body'>
					<div className='group-item'>
						<p>Grouping</p>
						<select
							className='group-select'
							onChange={(e) => {
								setState({ ...state, grouping: e.target.value })
								setIsOpen(false)
								localStorage.setItem(
									'state',
									JSON.stringify({
										...state,
										grouping: e.target.value,
									}),
								)
							}}
							value={state.grouping}
						>
							<option value='default'>Status</option>
							<option value='user'>User</option>
							<option value='priority'>Priority</option>
						</select>
					</div>
					<div className='group-item'>
						<p>Ordering</p>
						<select
							className='group-select'
							onChange={(e) => {
								setState({ ...state, ordering: e.target.value })
								setIsOpen(false)
								localStorage.setItem(
									'state',
									JSON.stringify({
										...state,
										ordering: e.target.value,
									}),
								)
							}}
							value={state.ordering}
						>
							<option value='default'>Priority</option>
							<option value='alphabetical'>Alphabetical</option>
						</select>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}
