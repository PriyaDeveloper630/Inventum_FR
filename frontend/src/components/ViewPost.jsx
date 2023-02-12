import React from 'react'

const ViewPost = () => {
  return (
    <div className="OutProfile">
      <div className="profileIconsmall"></div>
      <div className="profileName"><h3>Priya Malik</h3></div>
      <div className="reaction">
      <button><i class="fa fa-thumbs-up"  style={{fontSize: '35px',color: '#C0B2D2',}}></i></button>
      <button><i class="fa fa-commenting" style={{fontSize: '35px',color: '#C0B2D2',}}></i></button>
      
      <button><i class="fa fa-mail-reply-all" style={{fontSize: '35px',color: '#C0B2D2',}}></i></button>
      <button><i class="fa fa-paper-plane" style={{fontSize: '35px',color: '#C0B2D2',}}></i></button>
      </div>
      <div className="reaction" id='comment'>
      <input type="text" placeholder="Add a comment" style={{minWidth:'330px'}}/>
      <button id='post'>Post</button>
      </div>
    </div>
  )
}

export default ViewPost
