import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Header.css'

const Header = ({ title }) => {

	return (
		<header className='header'>
			<h1 className='header-title'>
				{title}
			</h1>

			<Button
				title='Add Task'
				onClick={() => console.log('Button Clicked')}
			/>
		</header>
	)

}

Header.defaultProps = {
	title: 'Header title',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header;

