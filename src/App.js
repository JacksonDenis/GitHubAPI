import React from 'react';
import Layout from './componets/layout';
import Profile from './componets/profile';
import { ResetCSS } from './global/resetCSS';
import Repositories from './componets/repositories';
import GithubProvider from './providers/github_provider';

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>

  )
}

export default App;
