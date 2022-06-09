import React from 'react';
import Layout from './componets/layout';
import Profile from './componets/profile';
import { ResetCSS } from './global/resetCSS';


const App = () => {
  return (
    <main>
      <ResetCSS/>
      <Layout>
        <Profile/>
        <div>Reporitories</div>
        <div>Starreds</div>
      </Layout>
    </main>
 
  )
}

export default App;
