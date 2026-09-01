import "./Button.css";

//This is a reusable componenet that accepts content through props.
function Button({ type, onClick, children }) {
    return (
        <button className="button" type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;