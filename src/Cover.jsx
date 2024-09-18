import './Cover.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faClose, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Cover ({ name, aboutMe, contactNo, email, imgUrl }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleConfirmEdit = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className='cover-outer-container'>
      <div className='width-70vw' style={ { display: 'flex', justifyContent: 'space-between', gap: '2rem'}}>
        <div className='cover-info-container'>
          <h1 className='cover-name'> {name} </h1>
          <div className='cover-about-me'> {aboutMe} </div>
          <div className='cover-contact-no'>{contactNo}</div>
          <div className='cover-email'>{email}</div>
        </div>
        <img className='cover-profile-pic' src={imgUrl} height='400px'></img>
      </div>

    
      { isEditing 
        ? <div className='btn-in-edit-container'> 
            <FontAwesomeIcon icon={faCheck} className='btn-in-edit btn-edit-confirm'onClick={handleConfirmEdit}/>
            <FontAwesomeIcon icon={faClose} className="btn-in-edit btn-edit-cancel" onClick={handleCancelEdit}/>
          </div> 
        : <FontAwesomeIcon icon={faPencil} className="btn-edit-icon" onClick={() => setIsEditing(!isEditing)}/> }

    </div>
  )
}

export default Cover
