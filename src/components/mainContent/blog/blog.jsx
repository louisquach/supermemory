import React from 'react'
import './blog.scss'
import {connect} from 'react-redux'

const BlogContent = ({display}) => {
    return (
        <div className='blog__container' style={{display: `${display}`}}>
        </div>
    )
}

const mapStateToProps = state => ({
    display: state.display.blog
})

export default connect(mapStateToProps)(BlogContent);