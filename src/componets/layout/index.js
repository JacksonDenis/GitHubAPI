import React from 'react'
import * as S from './styled'
import Header from '../header';

const Layout = ({children}) => {
  return (
    <section>
        <S.WrapperLayout>
          <Header/>
          {children}
        </S.WrapperLayout>
        
    </section>
  );
}

export default Layout