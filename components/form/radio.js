const Radio = ({id, label, name})=>{
    return(
        <label htmlFor={id} className="flex sm:space-x-2 space-x-1 border border-secondary-100 sm:px-3 px-1 py-2 rounded-md w-40 focus:border-primary-500 cursor-pointer">
            <input type="radio" id={id} className="w-3 h-3 text-primary-500 self-center focus:outline-none" name={name} />
            <div className="font-normal font-roboto text-sm text-secondary-500 focus:text-primary-500">{label}</div>
        </label>
    )
}

export default Radio;