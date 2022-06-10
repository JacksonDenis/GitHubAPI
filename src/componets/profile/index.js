import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Profile = () => {

  const {githubState} = useGithub();

  return <S.Wrapper>
    <S.WrapperImage 
      src="https://avatars.githubusercontent.com/u/1?v=4" 
      alt="Foto do Usuario" 
      />
    <S.WrapperInfo>
      <div>
        <h1>{githubState.user.name}</h1>
        <S.WrapperUserName>
          <h3>Username:</h3>
          <a href='{githubState.user.html_url}' target="_blank">{githubState.user.login}</a>
        </S.WrapperUserName>
      </div>
      <S.WrapperStatusCount>
        <div>
          <h4>Followers</h4>
          <span>{githubState.user.followers}</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span>{githubState.user.following}</span>
        </div>
        <div>
          <h4>Gists</h4>
          <span>{githubState.user.public_gists}</span>
        </div>
        <div>
          <h4>Repos</h4>
          <span>{githubState.user.public_repos}</span>
        </div>
      </S.WrapperStatusCount>
    </S.WrapperInfo>
  </S.Wrapper>;
};

export default Profile