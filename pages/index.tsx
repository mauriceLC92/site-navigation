import { Vercel } from '../components/Vercel';
import { Github } from '../components/Github';
import { NetLify } from '../components/Netlify';
import { WashingtonPost } from '../components/WashingtonPost';
import { Auth0Header } from '../components/Auth0';
import CalendarIcon from 'heroicons/outline/calendar.svg';

export default function Home() {
    return (
        <div className="space-y-6 bg-orange-400">
            <WashingtonPost />
            <Vercel />
            <Github />
            <NetLify />
            {/* Auth0 is WIP */}
            {/* <Auth0 /> */}
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
                    <div className="flex flex-col w-56 space-y-2">
                        <div className="flex hover:text-orange-500 cursor-pointer">
                            <CalendarIcon className="w-6 h-6 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                            12345
                        </div>
                        <div className="flex hover:text-orange-500 cursor-pointer">
                            <CalendarIcon className="w-6 h-6 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                            12345
                        </div>
                        <div className="flex hover:text-orange-500 cursor-pointer">
                            <CalendarIcon className="w-6 h-6 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                            12345
                        </div>
                        <div className="flex hover:text-orange-500 cursor-pointer">
                            <CalendarIcon className="w-6 h-6 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                            12345
                        </div>
                        <div className="flex hover:text-orange-500 cursor-pointer">
                            <CalendarIcon className="w-6 h-6 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                            12345
                        </div>
                        <div className="flex hover:text-orange-500 cursor-pointer">
                            <CalendarIcon className="w-6 h-6 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                            12345
                        </div>
                        <div className="flex hover:text-orange-500 cursor-pointer">
                            <CalendarIcon className="w-6 h-6 text-gray-700 mr-2 hover:text-orange-500 rounded-lg" />
                            12345
                        </div>
                    </div>
                    {/* right */}
                    <div className="flex justify-between items-start w-full px-4">
                        <div style={{ fontSize: '40px' }} className="">
                            Activity
                        </div>
                        <button className="uppercase bg-orange-500 w-64 h-10 text-gray-100 font-medium hover:bg-orange-600">
                            + create application
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
