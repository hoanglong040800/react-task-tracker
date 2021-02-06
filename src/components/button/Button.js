import PropTypes from 'prop-types'

const Button = ({ title, bgColor, txtColor, onClick }) => {

	return (
		<button
			className='btn'
			onClick={onClick}
			style={{ backgroundColor: bgColor, color: txtColor }}
		>
			{title}
		</button>
	)

}

Button.defaultProps = {
	title: 'Button Title',
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default Button