import './styles.css'
import SettingIcons from '../../Icons/settings.jsx'
import DownArrow from '../../Icons/down-arrow.jsx'

import { useState } from 'react'
export default function Header(){

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <button className='group-button' onClick={() => {
                console.log('Button Click', isOpen);
                setIsOpen(!isOpen);
            }}>
                <SettingIcons />
                Display
                <DownArrow />
            </button>

            {isOpen ? 
            <div className='header-body'> 
                <div className='group-item'>
                    <p>Grouping</p>
                    <select className='group-select'>
                        <option value="default">Status</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className='group-item'>
                    <p>Ordering</p>
                    <select className='group-select'>
                        <option value="default">Status</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
            </div> : <></>}
        </div>
    )
}