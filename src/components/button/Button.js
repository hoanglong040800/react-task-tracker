import './Button.css'

const Button = ({ title, bgColor, txtColor }) => {
	return (
		<button
			className='btn'
			style={{ backgroundColor: bgColor, color: txtColor }}
		>
			{title}
		</button>
	)
}

Button.defaultProps = {
	title: 'Button Title',
}

export default Button