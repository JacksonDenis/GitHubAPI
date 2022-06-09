import React from 'react';
import * as S from './styled';

const Profile = () => {
  return <S.Wrapper>
    <S.WrapperImage 
      src="https://avatars.githubusercontent.com/u/1?v=4" 
      alt="Foto do Usuario" 
      />
    <S.WrapperInfo>
      <div>
        <h1>Jackson Denis</h1>
        <S.WrapperUserName>
          <h3>Username:</h3>
          <span>Benits</span>
        </S.WrapperUserName>
      </div>
      <S.WrapperStatusCount>
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
      </S.WrapperStatusCount>
    </S.WrapperInfo>
  </S.Wrapper>;
};

export default Profile