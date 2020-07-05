import FolderIcon from 'heroicons/outline/folder.svg';
import EyeIcon from 'heroicons/outline/eye.svg';
import StarIcon from 'heroicons/outline/star.svg';
import ShareIcon from 'heroicons/outline/share.svg';
import CodeIcon from 'heroicons/outline/code.svg';
import CogIcon from 'heroicons/outline/cog.svg';
import ChartBarIcon from 'heroicons/outline/chart-bar.svg';
import TemplateIcon from 'heroicons/outline/template.svg';
import ShieldCheckIcon from 'heroicons/outline/shield-check.svg';
import BookOpenIcon from 'heroicons/outline/book-open.svg';
import PlayIcon from 'heroicons/outline/play.svg';
import SupportIcon from 'heroicons/outline/support.svg';
import ExclamationCircleIcon from 'heroicons/outline/exclamation-circle.svg';
import Link from 'next/link';

export const GithubRepoNavigation = () => {
    return (
        <div className="bg-gray-200 space-y-6 px-4">
            <div className="flex justify-between pt-4">
                <div className="space-x-2 flex items-center">
                    <FolderIcon className=" h-5 w-5 text-gray-600" />
                    <a
                        className="text-xl text-blue-600 text hover:underline"
                        href="https://github.com/mauriceLC92"
                    >
                        mauriceLC92
                    </a>
                    <div>/</div>

                    <a
                        className="text-xl text-blue-600 hover:underline font-bold"
                        href="https://github.com/mauriceLC92/site-navigation"
                    >
                        site-navigation
                    </a>
                </div>

                <div>
                    <div className="flex space-x-2">
                        <button className="flex items-center border border-solid border-gray-500 rounded-md pl-2 hover:bg-gray-300">
                            <EyeIcon className="h-4 w-4 text-gray-600 mr-2" />
                            <span className="pr-2 text-sm">Unwatch</span>
                            <span className="border-l-2 pl-2 bg-gray-100 rounded-r-md pr-2">
                                0
                            </span>
                        </button>
                        <button className="flex items-center border border-solid border-gray-500 rounded-md pl-2 hover:bg-gray-300">
                            <StarIcon className="h-4 w-4 text-gray-600 mr-2" />
                            <span className="pr-2 text-sm">Star</span>
                            <span className="border-l-2 pl-2 bg-gray-100 rounded-r-md pr-2">
                                1
                            </span>
                        </button>
                        <button className="flex items-center border border-solid border-gray-500 rounded-md pl-2 hover:bg-gray-300">
                            <ShareIcon className="h-4 w-4 text-gray-600 mr-2" />
                            <span className="pr-2 text-sm">Fork</span>
                            <span className="border-l-2 pl-2 bg-gray-100 rounded-r-md pr-2">
                                4
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <nav className="flex items-center">
                <Link href="#">
                    <a className="py-4 px-4 border-b-2 border-red-700 flex items-center">
                        <CodeIcon className="h-4 w-4 text-gray-600 mr-2" />
                        Code{' '}
                    </a>
                </Link>
                <RepositoryNavigation navItems={navigationItems} />
            </nav>
        </div>
    );
};

interface NavItem {
    navItemName: string;
    icon: React.ReactElement;
}

const navigationItems: NavItem[] = [
    {
        navItemName: 'Issues',
        icon: <ExclamationCircleIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
    {
        navItemName: 'Pull requests',
        icon: <SupportIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
    {
        navItemName: 'Actions',
        icon: <PlayIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
    {
        navItemName: 'Projects',
        icon: <TemplateIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
    {
        navItemName: 'Wiki',
        icon: <BookOpenIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
    {
        navItemName: 'Security',
        icon: <ShieldCheckIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
    {
        navItemName: 'Insights',
        icon: <ChartBarIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
    {
        navItemName: 'Insights',
        icon: <CogIcon className="h-4 w-4 text-gray-600 mr-2" />,
    },
];

const RepositoryNavigation = ({ navItems }) => {
    return navItems.map((item: NavItem) => {
        return (
            <Link key={item.navItemName} href="#">
                <a className="py-4 px-4 border-b-2 flex items-center hover:border-gray-400">
                    {item.icon}
                    {item.navItemName}{' '}
                </a>
            </Link>
        );
    });
};
