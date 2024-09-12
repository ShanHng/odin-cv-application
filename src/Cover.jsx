import './Cover.css'

function Cover ({ name, aboutMe, contactNo, email, imgUrl }) {
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
    </div>
  )
}

export default Cover
