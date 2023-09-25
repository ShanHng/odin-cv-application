import SectionItem from './SectionItem'
import './Section.css'

function Section ({ title, sectionItems }) {
  return (
    <div className='section-container'>
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
  )
}

export default Section
