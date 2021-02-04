import PropTypes from 'prop-types'
import Button from '../button/Button'

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={styles.heading}>
                {title}
            </h1>

            <Button  />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default title header',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const styles = {
    heading: {
        color: 'red',
        backgroundColor: 'lightblue',
        fontSize: 30,
    },
}

export default Header;

