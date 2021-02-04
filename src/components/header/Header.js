import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Header.css'

const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1 className='header-title'>
				{title}
			</h1>

			<Button/>
		</header>
	)
}

Header.defaultProps = {
	title: 'Default title header',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header;

