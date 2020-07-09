import { GithubNavBar } from './GithubHeaderNavBar';
import { GithubRepoNavigation } from './GithubRepositoryNavigation';
import CodeIcon from 'heroicons/outline/code.svg';
import CogIcon from 'heroicons/outline/cog.svg';
import ChartBarIcon from 'heroicons/outline/chart-bar.svg';
import TemplateIcon from 'heroicons/outline/template.svg';
import ShieldCheckIcon from 'heroicons/outline/shield-check.svg';
import BookOpenIcon from 'heroicons/outline/book-open.svg';
import PlayIcon from 'heroicons/outline/play.svg';
import SupportIcon from 'heroicons/outline/support.svg';
import ExclamationCircleIcon from 'heroicons/outline/exclamation-circle.svg';

export const Github = () => {
    return (
        <div>
            <GithubNavBar />
            <GithubRepoNavigation navigationItems={navigationItems} />
        </div>
    );
};

export interface NavItem {
    navItemName: string;
    icon: React.ReactElement;
    href: string;
    clicked: boolean;
    handleSelectedNavItem?: (value: string) => void;
}

const navigationItems: NavItem[] = [
    {
        navItemName: 'Code',
        icon: <CodeIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'code',
        clicked: true,
    },
    {
        navItemName: 'Issues',
        icon: <ExclamationCircleIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'issues',
        clicked: false,
    },
    {
        navItemName: 'Pull requests',
        icon: <SupportIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'pull-requests',
        clicked: false,
    },
    {
        navItemName: 'Actions',
        icon: <PlayIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'actions',
        clicked: false,
    },
    {
        navItemName: 'Projects',
        icon: <TemplateIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'projects',
        clicked: false,
    },
    {
        navItemName: 'Wiki',
        icon: <BookOpenIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'wiki',
        clicked: false,
    },
    {
        navItemName: 'Security',
        icon: <ShieldCheckIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'security',
        clicked: false,
    },
    {
        navItemName: 'Insights',
        icon: <ChartBarIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'insights',
        clicked: false,
    },
    {
        navItemName: 'Settings',
        icon: <CogIcon className="h-4 w-4 text-gray-600 mr-2" />,
        href: 'settings',
        clicked: false,
    },
];
