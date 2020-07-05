import LibraryIcon from 'heroicons/outline/library.svg';
import SpeakerphoneIcon from 'heroicons/outline/speakerphone.svg';
import Plus from 'heroicons/solid/plus.svg';
import ChevronDown from 'heroicons/solid/chevron-down.svg';
import Link from 'next/link';
import { Avatar } from './Avatar';

export const GithubNavBar = () => {
    return (
        <header>
            <nav className="h-12 bg-black flex justify-between pr-4 pl-4">
                <div className="flex items-center">
                    <button>
                        <LibraryIcon className="h-8 w-8 text-gray-200 mr-4" />
                    </button>

                    <form className="mr-4">
                        <input
                            style={{ width: '300px' }}
                            className="rounded p-1 bg-gray-700 text-gray-500"
                            type="search"
                            placeholder="Search or jump to..."
                        />
                    </form>
                    <div className="flex justify-between">
                        <div className="space-x-4">
                            <Link href="#">
                                <a className=" text-base font-bold leading-5 text-gray-100 hover:text-gray-500 transition ease-in-out duration-100">
                                    Pull requests
                                </a>
                            </Link>
                            <Link href="#">
                                <a className=" text-base font-bold leading-5 text-gray-100 hover:text-gray-500 transition ease-in-out duration-100">
                                    Issues
                                </a>
                            </Link>
                            <Link href="#">
                                <a className=" text-base font-bold	leading-5 text-gray-100 hover:text-gray-500 transition ease-in-out duration-100">
                                    Market Place
                                </a>
                            </Link>
                            <Link href="#">
                                <a className=" text-base font-bold	leading-5 text-gray-100 hover:text-gray-500 transition ease-in-out duration-100">
                                    Explore
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="hover:text-gray-500">
                        <SpeakerphoneIcon className="h-5 w-5 text-gray-200" />
                    </button>
                    <button className="flex items-center hover:text-gray-500">
                        <Plus className="h-5 w-5 text-gray-200 hover:text-gray-500" />
                        <ChevronDown className="h-4 w-4 text-gray-200 hover:text-gray-500" />
                    </button>
                    <button className="flex items-center">
                        <Avatar src="https://pbs.twimg.com/profile_images/780489174008885248/g9ZDoWai_400x400.jpg" />
                        <ChevronDown className="h-4 w-4 text-gray-200 hover:text-gray-500" />
                    </button>
                </div>
            </nav>
            <nav>{/* Bottom nav */}</nav>
        </header>
    );
};
