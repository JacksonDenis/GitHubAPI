import React from 'react'
import * as S from './styled'

const Layout = ({children}) => {
  return (
    <section>
        <S.WrapperLayout>
            Header
        </S.WrapperLayout>
        {children}
    </section>
  );
}

export default Layout