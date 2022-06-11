import React, { useState, useEffect } from 'react'
import * as S from "./styled"
import RepositoryItem from '../repository-item'
import useGithub from '../../hooks/github-hooks'

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false)

    useEffect(() => {
        if (!!githubState.user.login) {
            getUserRepos(githubState.user.login)
            getUserStarred(githubState.user.login)
        }
        setHasUserForSearchrepos(!!githubState.repositories)

    }, [githubState.user])

    return (
        <>
            {hasUserForSearchrepos ?

                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName='is-selected'
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.name}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperTabList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.name}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperTabList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
                : (<></>)}</>
    )
}

export default Repositories



