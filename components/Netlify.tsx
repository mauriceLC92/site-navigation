import ChevronDown from 'heroicons/solid/chevron-down.svg';
import SupportIcon from 'heroicons/outline/support.svg';
import { Avatar } from './Avatar';
import Link from 'next/link';
import { NetlifyLogo, NetlifyNotificationIcon } from './Logos/NetlifyLogo';

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
                                <a className="text-xl text-gray-600 hover:text-gray-100 transition ease-in-out duration-150">
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
