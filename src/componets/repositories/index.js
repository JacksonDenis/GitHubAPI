import React from 'react'
import * as S from "./styled"
import RepositoryItem from '../repository-item'

const Repositories=()=> {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName='is-selected'
            > 
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <RepositoryItem
                    name="repo 1" 
                    linkToRepo = "https://github.com/mojombo"
                    fullName = "Benits/app-ideas"
                    />
                </S.WrapperTabPanel>
                <S.WrapperTabPanel>
                <RepositoryItem
                    name="repo 2" 
                    linkToRepo = "https://github.com/mojombo"
                    fullName = "Benits/app-ideas"
                    />
                </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories



