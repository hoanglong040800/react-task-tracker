import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const About = () => {
  return (
    <div>
      <Header title='About' />

      <div style={{ marginTop: 20 }} className='fade-in'>
        <h3>Project</h3>
        <p>A simple task tracker where you can add, delete and toggle reminder.</p>

        <p>Code in ReactJS and REST API <a href="https://www.npmjs.com/package/json-server">JSON Server</a></p>

        <p>Link Github: <a href="https://github.com/hoanglong040800/react-task-tracker/">React Task Tracker</a></p>


        <h3>Me</h3>
        <p>I'm Long Tran, a third-year student at University of Information and Technology</p>

        <p>My github: <a href="https://github.com/hoanglong040800">github.com/hoanglong040800</a></p>
      </div>

      <Footer />
    </div>
  )
}

export default About
