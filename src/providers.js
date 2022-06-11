import React from 'react'
import useGithub from './hooks/github-hooks'
import { ResetCSS } from './global/resetCSS'
import GithubProvider from './providers/github_provider'
import App from './App'


const Providers = () => {
    const {githubState} = useGithub ()
    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <App/>
            </GithubProvider>
        </main>
    )
}

export default Providers