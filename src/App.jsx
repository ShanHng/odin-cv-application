import Cover from './Cover'
import Section from './Section'
import imgSrc from './assets/profile-pic.jpg'
import './App.css'

function App () {
  const data = {
    cover: {
      name: 'Hng Shan Hern',
      imgUrl: imgSrc,
      description: 'A Y3 Computing Student from NUS! Here to learn more about web development.\n+65 88413660\nhngshanhern@gmail.com',
    },
    sections: [
      {
        title: 'Past experience',
        sectionItems: [
          {
            title: 'Barista',
            duration: '20 January 19 - 20349',
            details: [
              'Helped to coordinate the brewing of tea and selling of goods'
            ]
          },
          {
            title: 'Teaching Assistant',
            duration: '20 January 19 - 349',
            details: [
              'Helped to educate some 10 mentees on Object Oriented Programming'
            ]
          }
        ],
      },
      {
        title:' Projects',
        sectionItems: [
          {
            title: 'OpenJio',
            duration: '20 January 19 - 20349',
            details: [
              'Helped to coordinate the brewing of tea and selling of goods'
            ]
          },
          {
            title: "The Intern's Ship",
            duration: '20 January 19 - 349',
            details: [
              'Helped to educate some 10 mentees on Object Oriented Programming'
            ]
          }
        ],
      }
    ],
  };
  return (
    <>
      <Cover
        { ...data.cover }
      />

      { data.sections.map(section => <Section key={section.title} {...section}/>)}
    </>
  )
}

export default App
