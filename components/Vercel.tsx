import React from 'react';
import Link from 'next/link';
import { VercelLogo } from './VercelLogo';
import { Avatar } from './Avatar';
import SelectorIcon from 'heroicons/solid/selector.svg';
import DotsHorizontalIcon from 'heroicons/solid/dots-horizontal.svg';

export const Vercel = () => {
    return (
        <div className="bg-white">
            <header className="space-y-2">
                <nav className="max-w-5xl mx-auto px-6 pt-5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Link href="3">
                            <a>
                                <VercelLogo className="h-6" />
                            </a>
                        </Link>
                        <span>
                            <svg
                                viewBox="0 0 32 32"
                                stroke="currentColor"
                                className="h-8 w-8 text-gray-300"
                            >
                                <line x1="8" y1="28" x2="22" y2="4" />
                            </svg>
                        </span>
                        <span className="inline-flex items-center space-x-2 leading-5 font-medium">
                            <Link href="#">
                                <a className="inline-flex items-center space-x-2">
                                    <span>
                                        <Avatar src="https://pbs.twimg.com/profile_images/780489174008885248/g9ZDoWai_400x400.jpg" />
                                    </span>
                                    <span>Maurice Le Cordier</span>
                                </a>
                            </Link>
                            <button
                                type="button"
                                className="inline-flex items-center border border-transparent rounded-sm p-1 hover:border-gray-200 hover:bg-gray-100 transition ease-in-out duration-300"
                            >
                                <SelectorIcon className=" h-5 w-5 text-gray-400" />
                            </button>
                        </span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-5">
                            <button
                                type="button"
                                className="border rounded-md border-gray-200 text-sm leading-5 text-gray-600 px-3 py-1 hover:border-black transition ease-in-out duration-150"
                            >
                                Feedback
                            </button>
                            <Link href="#">
                                <a className="inline-block text-sm leading-5 text-gray-600 hover:text-black transition ease-in-out duration-150">
                                    Blog
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="inline-block text-sm leading-5 text-gray-600 hover:text-black transition ease-in-out duration-150">
                                    Support
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="inline-block text-sm leading-5 text-gray-600 hover:text-black transition ease-in-out duration-150">
                                    Docs
                                </a>
                            </Link>
                            <button type="button">
                                <DotsHorizontalIcon className="h-5 w-5 text-gray-400" />
                            </button>

                            <button>
                                <Avatar src="https://pbs.twimg.com/profile_images/780489174008885248/g9ZDoWai_400x400.jpg" />
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-6">
                    <nav className="-mb-px flex space-x-5 text-sm leading-5">
                        <Link href="#">
                            <a className="py-4 px-1 border-b-2 border-black">
                                Overview
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-black ease-in-out duration-150">
                                Projects
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-black ease-in-out duration-150">
                                Intergrations
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-black ease-in-out duration-150">
                                Activity
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-black ease-in-out duration-150">
                                Domains
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-black ease-in-out duration-150">
                                Usage
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-black ease-in-out duration-150">
                                Settings
                            </a>
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="max-w-5xl mx-auto flex items-start justify-between px-6 pt-12 pb-24">
                <div className="flex space-x-8">
                    <div>
                        <img
                            className="h-24 w-24 rounded-full"
                            src="https://pbs.twimg.com/profile_images/780489174008885248/g9ZDoWai_400x400.jpg"
                        />
                    </div>
                    <div className="flex flex-col justify-between space-y-4">
                        <div className="flex items-center space-x-3">
                            <h1 className="text-4xl leading-10 font-bold">
                                Maurice Le Cordier
                            </h1>
                            <span className="mt-1 inline-flex bg-gray-100 border border-gray-200 rounded-full px-2 py text-xs uppercase leading-5 font-medium text-black">
                                Hobby
                            </span>
                        </div>
                        <div>
                            <dl>
                                <dt className="text-xs leading-5 font-medium text-gray-500 uppercase tracking-wide">
                                    Git integration
                                </dt>
                                <dd className="flex items-center space-x-2 text-sm leading-5 font-medium">
                                    <GithubLogo className="h-4 w-4" />
                                    <span>mauricelc92</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 col-gap-6 space-x-2">
                    <Link href="#">
                        <a
                            className="inline-flex justify-center rounded border border-gray-200 bg-white px-6 py-2 text-sm leading-5 font-medium text-gray-500 hover:border-black hover:text-black transition ease-in-out duration-150"
                            href=""
                        >
                            Invite Teams
                        </a>
                    </Link>
                    <Link href="#">
                        <a
                            className="inline-flex justify-center rounded border border-transparent bg-black px-6 py-2 text-sm leading-5 font-medium text-white hover:border-black hover:text-black hover:bg-white transition ease-in-out duration-150"
                            href=""
                        >
                            Import Projects
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
const GithubLogo = ({ className }) => {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
            <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
        </svg>
    );
};
