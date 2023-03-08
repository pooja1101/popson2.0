
import NeedHelp from "./help";
import Logo from "./logo";
import Link from "next/link";

function MainNavigation(){
    return(
        <header className="border-b border-secondary-100 bg-white dark:bg-gray-800">
            <div className="container mx-auto">
                <div className="flex justify-between py-4">
                    <Logo />
                    <div className="flex space-x-4 items-center">
                       <NeedHelp number="999 999 9999"/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default MainNavigation;