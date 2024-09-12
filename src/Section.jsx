import SectionItem from './SectionItem'
import './Section.css'

function Section ({ title, sectionItems }) {
  return (
    <div className='section-container' style={ { display: ' flex' , justifyContent: 'center'  } }>
      <div className='width-70vw'>
        <h2 className='section-title'>{title}</h2>
        <ul className='section-item-list'>
          {sectionItems.map((item, index) => (
            <SectionItem
              title={item.title}
              duration={item.duration}
              itemDetails={item.details}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Section
