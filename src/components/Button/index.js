import './button.css';

function Button ({text, onClick}) {
    return (
        <button onClick={onClick} className='button'>{text}</button>
    )
}

export default Button;