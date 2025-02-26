import Link from "next/link"

export function Navbar(){
    return(
        <>
        
            <nav className="">
                <ul className=" p-8 flex justify-around text-2xl items-center">
                    <Link href="/" className="navLink">Mapa</Link>
                    <Link href="/alagamento/alagamento">Alagamento</Link>
                    <Link href="/clima/clima">Clima</Link>
                </ul>
            </nav>
        </>
    )
}