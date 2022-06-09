import React from 'react';
import Layout from './componets/layout';
import Profile from './componets/profile';


const App = () => {
  return (
    <main>
      <Layout>
        <Profile/>
        <div>Reporitories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}

export default App;
