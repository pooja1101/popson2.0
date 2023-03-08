import Link from "next/link";
import Image from 'next/image';

function Logo(){
    return(
        <Link href="/">
            <Image src="/img/logo.svg" alt="website logo" width={180} height={50} priority />
        </Link>
    )
}
export default Logo;