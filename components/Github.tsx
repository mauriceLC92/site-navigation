import FolderIcon from 'heroicons/outline/folder.svg';
import { GithubNavBar } from './GithubHeaderNavBar';
import Link from 'next/link';

export const Github = () => {
    return (
        <div>
            <GithubNavBar />
            <div style={{ height: '112px' }} className="bg-gray-200 p-4">
                <div>
                    <div className=" space-x-2 flex items-center">
                        <FolderIcon className="h-8 w-8 text-gray-600" />
                        <Link href="#">
                            <a className="text-xl text-blue-600 text hover:underline">
                                mauriceLC92
                            </a>
                        </Link>
                        <div>/</div>
                        <Link href="#">
                            <a className="text-xl text-blue-600 hover:underline font-bold">
                                site-navigation
                            </a>
                        </Link>
                    </div>

                    <div> {/* right */}</div>
                </div>

                {/* Bottom nav */}
                <nav></nav>
            </div>
        </div>
    );
};
