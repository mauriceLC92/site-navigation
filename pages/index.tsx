import { Vercel } from '../components/Vercel';
import { Github } from '../components/Github';
import { NetLify } from '../components/Netlify';
import { WashingtonPost } from '../components/WashingtonPost';
import { Auth0 } from '../components/Auth0';
import { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: <Auth0 />, label: 'Auth0' },
    { value: <WashingtonPost />, label: 'Washington Post' },
    { value: <NetLify />, label: 'Netlify' },
    { value: <Github />, label: 'Github' },
    { value: <Vercel />, label: 'Vercel' },
];

export default function Home() {
    const [page, setPage] = useState({ value: <Auth0 />, label: 'Auth0' });
    const handlePageChange = (option) => {
        console.log(option);
        setPage(option);
    };
    return (
        <div className="flex flex-col justify-between bg-white space-y-2 mt-2">
            <div className="flex justify-center">
                <Select
                    className="w-64"
                    value={page}
                    onChange={(option) => handlePageChange(option)}
                    options={options}
                    option={page.label}
                />
            </div>
            {page.value}
        </div>
    );
}
