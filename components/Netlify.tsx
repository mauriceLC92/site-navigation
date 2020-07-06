import ChevronDown from 'heroicons/solid/chevron-down.svg';
import SupportIcon from 'heroicons/outline/support.svg';
import Plus from 'heroicons/solid/plus.svg';
import { Avatar } from './Avatar';
import Link from 'next/link';

export const NetLify = () => {
    return (
        <div className="bg-gray-800">
            <div className="max-w-5xl mx-auto h-64 pt-4 space-y-4">
                <div className="flex items-center justify-between border-b-2 border-gray-700 pb-4">
                    <div className="flex items-center">
                        <NetlifyLogo />
                        <div className="text-gray-100 text-2xl ml-4">
                            Maurice Le Cordier's team
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-200 hover:text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="hover:text-gray-500">
                            <NetlifyNotificationIcon />
                        </button>
                        <button className="flex items-center hover:text-gray-500">
                            <SupportIcon className="w-6 h-6 text-gray-500 mr-2 hover:bg-gray-600 rounded-lg" />
                        </button>
                        <button className="flex items-center">
                            <Avatar src="https://pbs.twimg.com/profile_images/780489174008885248/g9ZDoWai_400x400.jpg" />
                        </button>
                    </div>
                </div>
                {/* bottom nav */}
                <nav className="flex items-center space-x-4">
                    {[
                        'Sites',
                        'Builds',
                        'Plugins',
                        'Domains',
                        'Members',
                        'Audit log',
                        'Billing',
                        'Team settings',
                    ].map((navItem) => {
                        return (
                            <Link key={navItem} href="#">
                                <a className="text-xl text-gray-600 hover:text-gray-300">
                                    {navItem}
                                </a>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

const NetlifyLogo = () => {
    return (
        <svg
            className="w-16 h-16 fill-current text-blue-600"
            viewBox="0 0 400 400"
        >
            <path
                id="logomark"
                d="M290 139l-1-1 8-50 38 38-39 17h-1l-5-4zm55-3l40 40c9 9 13 13 14 18l1 2-97-41-1-1 1-1 42-17zm53 73c-2 4-6 8-13 15l-45 45-59-12h-1l-1-1c0-5-3-9-7-12v-1l11-68v-1l1-1c5 0 9-3 12-7h2l100 43zm-69 71l-75 75 13-79 1-1 7-5 1-1 53 11zm-91 91l-8 8-94-135v-1l1-2 1-1h1l103 22h1v1c2 5 6 10 11 12v1l-16 95zm-17 17c-7 6-10 10-15 11h-12c-5-2-9-6-18-14l-94-94 25-38h1a25 25 0 0 0 18-1h1l94 136zM73 282l-21-21 42-19h1l1 1 1 2v1l-24 36zm-31-31l-27-27-10-11 83 17 1 1-1 1-46 19zM0 199l1-5c1-5 6-9 14-18l35-35a22695 22695 0 0 0 48 70l1 1a29 29 0 0 0-5 6h-1L0 199zm59-67l47-47 35 15a5977 5977 0 0 1 25 11l-1 5c0 5 2 10 6 14v2l-48 73v1h-1l-6-1-5 1h-1v-1l-51-73zm57-56l60-61c9-8 13-12 18-14h12c5 2 10 6 18 14l13 13-43 67v1h-1l-7-1c-5 0-10 1-13 4h-2l-55-23zm130-39l40 40-9 60h-1v1a19 19 0 0 0-6 3h-1l-61-26-1-1a23 23 0 0 0-3-9v-2l42-66zm-41 90l57 24 1 1v5l-1 1-127 54-1-1 1-1 47-72 1-1h3a21 21 0 0 0 18-10h1zm-65 96l128-55 1 1 1 1h1v1l-11 68v1c-6 0-12 4-15 9v1h-1l-102-22-2-5z"
            ></path>
        </svg>
    );
};

const NetlifyNotificationIcon = () => {
    return (
        <svg
            className="w-6 h-6 fill-current hover:bg-gray-700 rounded-lg transition ease-in-out duration-500"
            viewBox="0 0 24 24"
        >
            <path
                fill="#7d8589"
                d="M12.338 2.01a6 6 0 005.274 7.977V10l2.141 4.008c.513.959.201 2.18-.696 2.728a1.778 1.778 0 01-.928.264H5.871C4.837 17 4 16.105 4 15c0-.348.085-.69.246-.992L6.388 10V8C6.388 4.686 8.9 2 12 2c.113 0 .226.004.338.01zM15 19a3 3 0 11-6 0h6z"
            ></path>
            <circle cx="18" cy="4.25" r="4" fill="#FA3946"></circle>
        </svg>
    );
};
