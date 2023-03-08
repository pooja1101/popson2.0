import Radio from "@/components/form/radio";
import SimpleSlider from "@/components/signup/slider";
// import Slider from "@/components/signup/slider";
import SliderWrapper from "@/components/signup/slider-wrapper";
import Button from "@/components/form/button";
import H6 from "@/components/ui/h6";
import P from "@/components/ui/p";
import { Fragment } from "react";
import CommonButton from "@/components/ui/button";

function SignUp(){
    
    return(
        
        <Fragment >
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto sm:px-0 px-3">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4 py-5 sm:gap-y-0 gap-y-3">
                        <div className=" min-h-custome rounded-xl overflow-hidden ">
                            <SliderWrapper Background="../img/slider-bg.svg">
                                {/* <Slider/> */}
                                <SimpleSlider/>
                                
                            </SliderWrapper>
                        </div>
                        <div className="self-center sm:px-6 xl:w-3/4">
                            <H6 text="Sign Up"/>
                            <div className="flex pt-2">
                                <P>
                                    Having an account? 
                                    <span className="text-primary-600 font-semibold"> Sign-in</span> here
                                </P>
                            </div>
                            <form>
                                <div className="lg:flex lg:space-x-3 mt-6 lg:space-y-0 space-y-3">
                                    <P classNames="self-center">Sign up with</P>
                                   
                                    <div className="flex space-x-3">
                                        <Button type="submit">
                                            <img src="./img/github.svg" alt="github" className="h-9"/>
                                        </Button>
                                        <Button >
                                            <img src="./img/google.svg" alt="google" className="h-9"/>
                                        </Button>
                                    </div>
                                </div>
                                <div className="relative my-10">
                                    <hr className=" "/>
                                    <p className="absolute left-1/2 transform -translate-x-1/2 px-4 bg-white -top-3">Or</p>
                                </div>
                                <P classNames="self-center">What are you looking for?</P>
                                <div className="flex space-x-3 py-4 mb-2">
                                    <Radio id="personal" label="Personal" name="user-type" />
                                    <Radio id="organization" label="Organization" name="user-type" />
                                    <Radio id="partner" label="Partner" name="user-type" />
                                </div>
                                <CommonButton color="primary-500">Next</CommonButton>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}
export default SignUp;