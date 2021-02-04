const Button = ({ title, bgColor, textColor }) => {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            {title}
        </button>
    )
}

Button.defaultProps = {
    bgColor: '#333',
    title: 'Button',
    textColor: '#fff',
}

export default Button