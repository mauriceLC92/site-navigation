import { Vercel } from '../components/Vercel/Vercel';
import { Github } from '../components/Github/Github';
import { NetLify } from '../components/Netlify';
import { WashingtonPost } from '../components/WashingtonPost';
import { Auth0 } from '../components/Auth0';
import { useState } from 'react';
import Select from 'react-select';
import { GithubStar } from '../components/GithubStar';
import { GithubWatch } from '../components/GithubWatch';

interface IOption {
    value: JSX.Element;
    label: string;
}

const options = [
    { value: <Auth0 />, label: 'Auth0' },
    { value: <Vercel />, label: 'Vercel' },
    { value: <Github />, label: 'Github' },
    { value: <WashingtonPost />, label: 'Washington Post' },
    { value: <NetLify />, label: 'Netlify' },
];

export default function Home() {
    const [page, setPage] = useState({ value: <Auth0 />, label: 'Auth0' });
    const handlePageChange = (option) => {
        setPage(option);
    };
    return (
        <div className="flex flex-col justify-between bg-white space-y-2 mt-2">
            <div className="flex justify-center items-center space-x-2">
                <GithubStar />
                <GithubWatch />
                <Select
                    className="w-64"
                    value={page}
                    onChange={(option: IOption) => handlePageChange(option)}
                    options={options}
                    option={page.label}
                />
            </div>
            {page.value}
        </div>
    );
}
