import { GithubNavBar } from './GithubHeaderNavBar';
import { GithubRepoNavigation } from './GithubRepositoryNavigation';

export const Github = () => {
    return (
        <div>
            <GithubNavBar />
            <GithubRepoNavigation />
        </div>
    );
};
