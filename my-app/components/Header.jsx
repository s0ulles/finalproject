import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";


export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="font-mono h-12 flex mx-auto justify-between items-center py-5 bg-gray-600 w-full">
            <div >
                <img className=" max-w-10" src="https://www.svgrepo.com/show/327418/logo-xing.svg" alt="" />
            </div>
            <nav className="hidden md:flex gap-x-8">
                <Link className=" text-l text-white hover:text-gray-400 transition-all" href="/">☖ Главная</Link>
                <Link className=" text-l text-white hover:text-gray-400 transition-all" href="/about">🛈 О нас</Link>
                <Link className=" text-l text-white hover:text-gray-400 transition-all" href="/users">✉ Личный кабинет</Link>
                <Dropdown title="Товары">
                    <ul className="bg-gray-600  ">
                        <li><Link className=" text-l text-white hover:text-gray-400 transition-all border-b-2 border-transparent hover:border-white mt-[10px]" href="/goods/laptops">Ноутбуки</Link></li>
                        <li><Link className=" text-l text-white hover:text-gray-400 transition-all border-b-2 border-transparent hover:border-white mt-[10px]" href="/goods/phones">Телефоны</Link></li>
                        <li><Link className=" text-l text-white hover:text-gray-400 transition-all border-b-2 border-transparent hover:border-white mt-[10px]" href="/goods/accesories">Аксессуары</Link></li>
                        <li><Link className=" text-l text-white hover:text-gray-400 transition-all border-b-2 border-transparent hover:border-white mt-[10px]" href="/goods/consoles">Игровые приставки</Link></li>

                    </ul>
                </Dropdown>
            </nav>
            <button className="inline-block md:hidden" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>
        </header>
    )
}
