import React from 'react';
import Layout from './componets/layout';


function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="Foto do Usuario" />
          <h1>Jackson Denis</h1>
          <h3>Username</h3>
          <span>Benits</span>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </div>
        <div>Reporitories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}

export default App;
