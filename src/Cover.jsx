import './Cover.css'

function Cover ({ name, aboutMe, contactNo, email, imgUrl }) {
  return (
    <div className='cover-outer-container'>
      <div className='cover-info-container'>
        <h1 className='cover-name'> {name} </h1>
        <div className='cover-about-me'> {aboutMe} </div>
        <div className='cover-contact-no'>{contactNo}</div>
        <div className='cover-email'>{email}</div>
      </div>
      <img className='cover-profile-pic' src={imgUrl} height='400px'></img>
    </div>
  )
}

export default Cover