import React from 'react'
import './signbarItem.scss'

const SideBarItem = ({name,onClick,display,...otherprops}) => {
    return (
        <div className="sidebar__item-container">
            <div className='sidebar__item' onClick={onClick}><span className='sidebar__item-name'>{name}</span></div>
        </div>
    )
}

export default SideBarItem;