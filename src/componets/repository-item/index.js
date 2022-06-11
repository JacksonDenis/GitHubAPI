import React from 'react'
import * as S from "./styled"

const RepositoryItem = ({name, linkToRepo, fullName}) => {
  return (
    <S.Wrapper>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullname>Full name: {fullName}</S.WrapperFullname>
        <S.WrapperLink href={linkToRepo} target="_blank">{fullName}</S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem