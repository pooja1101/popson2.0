function P({children, classNames}){
    return(
        <p className={`font-roboto font-medium text-secondary-500 text-sm ${classNames}`}> {children} </p>
    )
}
export default P;