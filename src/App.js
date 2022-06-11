import React from 'react';
import Layout from './componets/layout';
import Profile from './componets/profile';
import useGithub from './hooks/github-hooks';
import Repositories from './componets/repositories';
import NoSearch from './no-search';

const App = () => {
  const {githubState} = useGithub ()
  return (
    <main>
        <Layout>
          {githubState.hasUser ? <>
            {githubState.loading ? <p>loading</p> : <>
            <Profile/>
            <Repositories/>
           </>}
          </> :( <NoSearch/>)}

           
        </Layout>
      
    </main>

  )
}

export default App;
