import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
function Sidebar() {
  return (
    <div className='m-3'>
    <div className='d-flex flex-column gap-3 position-fixed'>
        <img className="logo-text" src="assets\insta_text.png" alt="instagram" />
        <div><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Messages</div>
        <div><i className="bi bi-suit-heart"></i>Notifications</div>
        <div><i className="bi bi-plus-square"></i>Create</div>
        <div><Link to="/profile"><i className="bi bi-person-circle"></i>Profile</Link></div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar