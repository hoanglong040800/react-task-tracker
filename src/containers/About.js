import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const About = () => {
  return (
    <div>
      <Header title='About' />

      <div style={{ marginTop: 20 }} className='fade-in'>
        
        <h3>Project</h3>
        <ul style={{ marginLeft: 20 }}>
          <li>A simple task tracker where you can add, delete and toggle reminder.</li>
          <li>Code in ReactJS and fake REST API JSON Server</li>
          <li>Link Github: <a href="https://github.com/hoanglong040800/react-task-tracker/">React Task Tracker</a></li>
          <li>Checkout my Clothes Shop website: <a href="https://simpleclothesshop.netlify.app">Clothes Shop</a></li>
        </ul>

        <br />

        <h3>Me</h3>
        <ul style={{ marginLeft: 20 }}>
          <li>I'm Long Tran, a third-year student at University of Information and Technology</li>
          <li>My github: <a href="https://github.com/hoanglong040800">github.com/hoanglong040800</a></li>
        </ul>

      </div>

      <Footer />
    </div>
  )
}

export default About
