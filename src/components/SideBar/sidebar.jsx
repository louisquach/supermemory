import React from 'react'
import './signbar.scss'
import SideBarItem from './sidebarItems/sidebarItem';
import { DisplayLearn, DisplayTest, DisplayBlog } from '../../redux/displayScreen/screenReducer'
import {connect} from 'react-redux'
import { Learn0 } from '../../redux/learnNumber/learnReducer';


const SideBar = ({learn,test,blog,changeScreen}) => {
    return (
        <div className="sidebar__container">
            <SideBarItem onClick={learn} name="learn"/>
            <SideBarItem onClick={test} name="test"/>
            <SideBarItem onClick={blog} name="blog"/>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return () => ({
        learn: () => dispatch(DisplayLearn()),
        test: () => dispatch(DisplayTest()),
        blog: () => dispatch(DisplayBlog())
   })
}
export default connect(null, mapDispatchToProps)(SideBar);