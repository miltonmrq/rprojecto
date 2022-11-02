import './button.css';

function Button ({text, onClick}) {
    return (
        <button onClick={onClick} className='button is-large is-primary'>{text}</button>
    )
}

export default Button;