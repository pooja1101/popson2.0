const Button = ({children, classNames, ...rest}) => {
    return(
        <button className={`border border-secondary-100 px-6 py-1 rounded-md w-36 flex justify-center ${classNames} `}  {...rest}>
            {children}         
        </button>
    )
}
export default Button;