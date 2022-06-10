import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setgithubState] = useState({
    loading: false,
    user: {
      login: undefined,
      name: "Jackson",
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  })

  const getUser = (username) => {
    api.get(`users/${username}`).then(({data:{user}}) => {
      setgithubState(prevState => ({
        ...prevState,
        user: {
          login: user.login,
          name:  user.name,
          html_url:  user.html_url,
          blog:  user.blog,
          company:  user.company,
          location:  user.location,
          followers:  user.followers,
          following:  user.following,
          public_gists:  user.public_gists,
          public_repos:  user.public_repos,
        }
      }))
    });
  }

  const contextValue = {
    githubState,
    gitUser: useCallback ((username) => getUser(username), [] ),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider