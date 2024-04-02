import logo from "@/public/assets/lws_logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <>
            <Link href="/">
                <Image
                    class="max-w-[100px] md:max-w-[165px]"
                    src={logo}
                    alt="Lws"
                />
            </Link>
        </>
    );
};

export default Logo;