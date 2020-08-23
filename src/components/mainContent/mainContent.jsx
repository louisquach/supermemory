import React from 'react'
import './mainContent.scss'
import LearnContent from './LearnContent/Learn_content'
import TestContent from './TestContent/test'
import BlogContent from './blog/blog'

const MainContent = () => {
    return (
        <div className='mainContent__container'>
            <LearnContent/>
            <TestContent/>
            <BlogContent/>
        </div>
    )
}

export default MainContent;