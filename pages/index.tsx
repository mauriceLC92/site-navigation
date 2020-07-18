import { Vercel } from '../components/Vercel';
import { Github } from '../components/Github';
import { NetLify } from '../components/Netlify';
import { WashingtonPost } from '../components/WashingtonPost';
import { Auth0 } from '../components/Auth0';

export default function Home() {
    return (
        <div className="space-y-6 bg-white">
            <div>{/* Dropdown */}</div>
            <Auth0 />
            <WashingtonPost />
            <Vercel />
            <Github />
            <NetLify />
        </div>
    );
}
