import React from 'react'

import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Layout = ({children}) => (
    <div className='view-container'>
        <Header />
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    {children}
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Layout
