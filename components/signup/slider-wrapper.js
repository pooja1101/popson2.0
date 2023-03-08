import { Fragment } from "react";

function SliderWrapper(props){
    const Background = props.Background;
    return(
        <Fragment>
            <div className=" h-full rounded-lg bg-center bg-no-repeat bg-cover flex justify-center items-center bg-primary-500"  style={{ backgroundImage: `url(${Background})` }}>
                {props.children}
            </div>
        </Fragment>
    )
}
export default SliderWrapper;