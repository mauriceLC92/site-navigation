import { Vercel } from '../components/Vercel';
import { Github } from '../components/Github';
import { NetLify } from '../components/Netlify';
import { WashingtonPost } from '../components/WashingtonPost';
import { Auth0Header } from '../components/Auth0Header';
import CalendarIcon from 'heroicons/outline/calendar.svg';
import TemplateIcon from 'heroicons/outline/template.svg';
import KeyIcon from 'heroicons/outline/key.svg';
import FlagIcon from 'heroicons/outline/flag.svg';
import ExclamationIcon from 'heroicons/outline/exclamation.svg';
import AdjustmentsIcon from 'heroicons/outline/adjustments.svg';
import BellIcon from 'heroicons/outline/bell.svg';
import BriefcaseIcon from 'heroicons/outline/briefcase.svg';
import TagIcon from 'heroicons/outline/tag.svg';
import TerminalIcon from 'heroicons/outline/terminal.svg';
import TranslateIcon from 'heroicons/outline/translate.svg';
import StarIcon from 'heroicons/outline/star.svg';
import RefreshIcon from 'heroicons/outline/refresh.svg';
import PhotographIcon from 'heroicons/outline/photograph.svg';
import QrCodeIcon from 'heroicons/outline/qrcode.svg';
import { MyResponsiveCalendar, calendarData } from '../components/NivoCalendar';

export default function Home() {
    return (
        <div className="space-y-6 bg-white">
            <Auth0 />
            <WashingtonPost />
            <Vercel />
            <Github />
            <NetLify />
        </div>
    );
}

const Auth0 = () => {
    return (
        <div className="bg-white">
            <div className="bg-white max-w-6xl mx-auto">
                <Auth0Header />

                <div className="flex mt-10">
                    {/* left */}
                    <div className="flex flex-col w-56 space-y-4 mt-4">
                        {[
                            ,
                            {
                                title: 'Dashboard',
                                icon: (
                                    <CalendarIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Applications',
                                icon: (
                                    <KeyIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'SSO Integrations',
                                icon: (
                                    <BriefcaseIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Connections',
                                icon: (
                                    <ExclamationIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Universal Login',
                                icon: (
                                    <AdjustmentsIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Users & Roles',
                                icon: (
                                    <TemplateIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Rules',
                                icon: (
                                    <BellIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Hooks',
                                icon: (
                                    <TagIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Multifactor Auth',
                                icon: (
                                    <TerminalIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Emails',
                                icon: (
                                    <TranslateIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Logs',
                                icon: (
                                    <StarIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Anomaly Detection',
                                icon: (
                                    <RefreshIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Extensions',
                                icon: (
                                    <PhotographIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                            {
                                title: 'Get Support',
                                icon: (
                                    <QrCodeIcon className="w-5 h-5 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                                ),
                            },
                        ].map((heading) => (
                            <div
                                key={heading.title}
                                className="flex items-center hover:text-orange-500 text-xs cursor-pointer"
                            >
                                {heading.icon}
                                {heading.title}
                            </div>
                        ))}
                    </div>
                    {/* right */}
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between w-full">
                            <div style={{ fontSize: '40px' }} className="">
                                Activity
                            </div>
                            <button className="uppercase bg-orange-500 w-64 h-10 text-gray-100 font-medium hover:bg-orange-600">
                                + create application
                            </button>
                        </div>

                        <div className="h-56 mb-2 border-b border-t border-solid border-gray-300">
                            <MyResponsiveCalendar data={calendarData} />
                        </div>

                        <div className="pb-5 flex justify-around border-b border-solid border-gray-300 ">
                            {statCardData.map((card) => (
                                <div
                                    key={card.name}
                                    className="flex flex-col items-center"
                                >
                                    <div>{card.name}</div>
                                    <div className="text-gray-700 text-3xl">
                                        {card.value}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {card.duration}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            {activityData.map((activity) => (
                                <div
                                    key={activity.heading}
                                    className="mt-2 w-2/4"
                                >
                                    <div className="border-b border-solid border-gray-400">
                                        <div>
                                            <div className="pb-1">
                                                {activity.heading}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs mt-6">
                                        {activity.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const activityData = [
    {
        heading: 'Latest Logins',
        value: 'No recent activity',
    },
    {
        heading: 'New Signups',
        value: 'No recent activity',
    },
];

const statCardData = [
    {
        name: 'Users',
        value: 2,
        duration: 'All time',
    },
    {
        name: 'Logins',
        value: 0,
        duration: 'Last 7 days',
    },
    {
        name: 'New signups',
        value: 0,
        duration: 'Last 7 days',
    },
];
