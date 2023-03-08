function NeedHelp(props){
    const numbers = props.number;
    return(
        <div className="flex space-x-2 self-center">
            <span className="font-roboto text-md text-primary-500 font-medium">Need help?</span>
            <span className="text-black dark:text-white ">{numbers}</span>
        </div>
    )
}
export default NeedHelp;