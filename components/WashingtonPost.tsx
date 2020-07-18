import Link from 'next/link';
import SearchIcon from 'heroicons/solid/search.svg';
import MenuIcon from 'heroicons/solid/menu.svg';
import UserIcon from 'heroicons/solid/user.svg';
import { WashingtonPostLogo } from './Logos/WashingtonPostLogo';

export const WashingtonPost = () => {
    return (
        <header>
            {/* Top nav */}
            <nav className="flex items-center justify-between h-16 bg-gray-900 px-2">
                <div className="flex items-center space-x-4">
                    <button className="border-2 border-gray-700 border-solid p-1 rounded-md bg-gray-800">
                        <SearchIcon className="h-6 w-6 text-gray-500" />
                    </button>

                    <div className="flex items-center border-2 border-gray-700 border-solid p-1 rounded-md bg-gray-800 space-x-2">
                        <button className="text-gray-400">Sections</button>
                        <MenuIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    {[
                        'Politics',
                        'Opinions',
                        'Investigations',
                        'Election 2020',
                        'Coronavirus',
                        'Tech',
                        'World',
                        'Sports',
                    ].map((navItem) => (
                        <Link key={navItem} href="#">
                            <a className="text-sm font-bold text-gray-400 hover:text-gray-300 tracking-wide">
                                {navItem}
                            </a>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-2">
                    <div className="flex items-center border-2 border-gray-700 border-solid p-1 rounded-md bg-gray-800">
                        <button className="text-gray-400 text-sm font-bold">
                            Sign In
                        </button>
                        <UserIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    <button className="bg-blue-700 text-gray-200 text-sm font-bold p-1 border-2 border-gray-700 border-solid">
                        Get 1 year for $29
                    </button>
                    <button className="bg-blue-700 text-gray-200 text-sm font-bold p-1 border-2 border-gray-700 border-solid">
                        Gift subscription
                    </button>
                </div>
            </nav>

            {/* Bottom navigation */}

            <div className="flex flex-col bg-gray-200">
                <div className="flex justify-center">
                    <WashingtonPostLogo className={'mt-4'} />
                </div>

                <div className="flex mt-2 items-center w-2/3 mx-auto justify-between border-b-2 border-solid border-black pb-1">
                    <div className="font-bold" style={{ fontSize: '12px' }}>
                        July 9, 2020
                    </div>
                    <div className="font-serif italic text-base">
                        Democracy Dies in Darkness
                    </div>
                    <ul className="inline-flex" style={{ fontSize: '12px' }}>
                        <li className="pr-1">Edition:</li>
                        <li className="underline pr-1">US & World</li>
                        <li className="pr-1">|</li>
                        <li>Regional</li>
                    </ul>
                </div>

                <nav className="flex w-2/3 items-center mx-auto mt-2 space-x-2 pb-2 border-b-2 border-solid border-gray-300">
                    <Link href="#">
                        <a className="text-red-600">Kanye West</a>
                    </Link>
                    <Link href="#">
                        <a className="">Schools</a>
                    </Link>
                    <Link href="#">
                        <a className="">U.S Cases</a>
                    </Link>
                    <Link href="#">
                        <a className="">Harvard Lawsuits</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
