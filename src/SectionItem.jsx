import './SectionItem.css'

function SectionItem ({ title, duration, itemDetails }) {
  return (
    <li className='section-item'>
      <div className='section-item-header'>
        <div className='section-item-title'>{title}</div>
        <div className="section-item-duration">{duration}</div>
      </div>
      <ul className='section-item-detail-list'>
        {itemDetails.map((item, index) => (
          <li className='section-item-detail' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default SectionItem
