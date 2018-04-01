import React from 'react'

import Header from '../../components/header'
import MainPageLayout from '../../components/mainPageLayout'
import Footer from '../../components/footer'

const Layout = ({children}) => (
    <div className='view-container'>
        <Header />
        <MainPageLayout component={children} />
        <Footer />
    </div>
)

export default Layout
