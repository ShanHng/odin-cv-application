import Cover from './Cover'
import Section from './Section'
import imgSrc from './assets/profile-pic.jpg'
import './App.css'

function App () {
  return (
    <>
      <Cover
        name='Hng Shan Hern'
        aboutMe='A Y3 Computing Student from NUS! Here to learn more about web development.'
        contactNo='+65 88413660'
        email='hngshanhern@gmail.com'
        imgUrl={imgSrc}
      />

      <Section
        title='Past experience'
        sectionItems={[
          {
            title: 'Barista',
            duration: '20 January 19 - 20349',
            details:[
              'Helped to coordinate the brewing of tea and selling of goods'
            ]
          },
          {
            title: 'Teaching Assistant',
            duration: '20 January 19 - 349',
            details:[
              'Helped to educate some 10 mentees on Object Oriented Programming'
            ]
          }
        ]}
      />

<Section
        title='Projects'
        sectionItems={[
          {
            title: 'OpenJio',
            duration: '20 January 19 - 20349',
            details:[
              'Helped to coordinate the brewing of tea and selling of goods'
            ]
          },
          {
            title: 'The Intern\'s Ship',
            duration: '20 January 19 - 349',
            details:[
              'Helped to educate some 10 mentees on Object Oriented Programming'
            ]
          }
        ]}
      />
    </>
  )
}

export default App
