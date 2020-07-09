import { Vercel } from '../components/Vercel';
import { Github } from '../components/Github';
import { NetLify } from '../components/Netlify';
import { WashingtonPost } from '../components/WashingtonPost';

export default function Home() {
    return (
        <div className="space-y-6 bg-orange-400">
            <Vercel />
            <Github />
            <NetLify />
            <WashingtonPost />
        </div>
    );
}
