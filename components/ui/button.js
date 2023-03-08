function CommonButton({children, classNames, color,...rest}){
    return(
        <button className={`bg-${color} hover:bg-opacity-90 cursor-pointer text-white font-poppins font-normal text-sm px-6 py-2 rounded-sm ${classNames}`} {...rest}>{children}</button>
    )
}
export default CommonButton;