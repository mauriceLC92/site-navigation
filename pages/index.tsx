import { Vercel } from '../components/Vercel';
import { Github } from '../components/Github';
import { NetLify } from '../components/Netlify';
import { WashingtonPost } from '../components/WashingtonPost';
import { Auth0Header } from '../components/Auth0';

export default function Home() {
    return (
        <div className="space-y-6 bg-orange-400">
            <WashingtonPost />
            <Vercel />
            <Github />
            <NetLify />
            <Auth0 />
        </div>
    );
}

const Auth0 = () => {
    return (
        <div className="bg-white">
            <div className="bg-white max-w-6xl mx-auto">
                <Auth0Header />
            </div>
        </div>
    );
};
