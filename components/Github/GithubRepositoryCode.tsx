import CogIcon from 'heroicons/outline/cog.svg';

export const GitHubRepositoryCode = () => {
    return (
        <div className="mt-10 max-w-6xl mx-auto flex space-x-6">
            <div style={{ width: '1050px' }}>
                <GitHubAlert />
                {/* <AlertnativeAlert /> */}
            </div>

            <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                    <div className="text-gray-900 text-xl font-semibold">
                        About
                    </div>
                    <button className="text-gray-900 text-xl">
                        <CogIcon className="h-5 w-5 text-gray-700" />
                    </button>
                </div>

                <div>
                    Different popular site navigations built in TailwindCSS
                </div>

                <div className="flex items-center">
                    <span>
                        <LinkIcon className="w-4 h-4 mr-2" />
                    </span>
                    <span className="text-blue-500 hover:underline cursor-pointer">
                        site-navigation.vercel.app
                    </span>
                </div>
                <div className="flex items-center">
                    <span>
                        <BookIcon className="w-4 h-4 mr-2 text-gray-600" />
                    </span>
                    <span className="text-gray-600 hover:underline cursor-pointer">
                        Readme
                    </span>
                </div>
            </div>
        </div>
    );
};

const BookIcon = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 16 16"
            version="1.1"
            aria-hidden="true"
            fill="currentColor"
        >
            <path
                fill-rule="evenodd"
                d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
            ></path>
        </svg>
    );
};

const LinkIcon = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 16 16"
            version="1.1"
            aria-hidden="true"
            fill="currentColor"
        >
            <path
                fill-rule="evenodd"
                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
            ></path>
        </svg>
    );
};

const AlertnativeAlert = () => {
    return (
        <div
            className="bg-teal-100 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
        >
            <div className="flex">
                <div className="py-1">
                    <svg
                        className="fill-current h-6 w-6 text-teal-500 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                </div>
                <div>
                    <p className="font-bold">Our privacy policy has changed</p>
                    <p className="text-sm">
                        Make sure you know how these changes affect you.
                    </p>
                </div>
            </div>
        </div>
    );
};

const GitHubAlert = () => {
    return (
        <div className="flex items-center justify-between p-2 bg-yellow-200 h-20 rounded border border-yellow-400 border-solid">
            <div className="flex flex-col">
                <div>
                    <AlertIcon className="h-5 w-5 text-yellow-500 mr-1 inline" />
                    <span className="text-sm font-bold">
                        We found potential security vulnerabilities in your
                        dependencies.
                    </span>
                </div>
                <div className="ml-6 text-xs">
                    Only the owner of this repository can see this message.
                </div>
            </div>
            <div>
                <button className="px-3 py-1 bg-gray-100 rounded-lg border-solid border-gray-300 border text-sm tracking-wider font-semibold hover:bg-gray-200 hover:border-gray-400">
                    See dependabot alerts
                </button>
            </div>
        </div>
    );
};

const AlertIcon = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 16 16"
            version="1.1"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
            ></path>
        </svg>
    );
};
