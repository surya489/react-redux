const Button = ({
    customClass = "",
    onClick = () => {},
    children,
    disabled = false
}) => {
    return (
        <button className={`btn btn-primary ${customClass}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
};

export default Button;