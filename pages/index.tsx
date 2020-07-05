import { Vercel } from '../components/Vercel';
import { Github } from '../components/Github';

export default function Home() {
    return (
        <div className="space-y-4">
            <Vercel />
            <Github />
        </div>
    );
}
