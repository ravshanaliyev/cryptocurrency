import { Avatar, Button, Menu, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'
import { HomeOutlined, MenuOutlined, FunctionOutlined, MoneyCollectOutlined, BulbOutlined, MenuFoldOutlined } from '@ant-design/icons'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(undefined)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize) 
    }, [])

    useEffect(() => {
        if (screenSize <= 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])
    const items = [
        {
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>,
            key: 'home',
        },
        {
            icon: <FunctionOutlined />,
            label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
            key: 'cryptocurrencies',
        },
        {
            icon: <MoneyCollectOutlined />,
            label: <Link to="/exchanges">Exchanges</Link>,
            key: 'exchanges',
        },
        {
            icon: <BulbOutlined />,
            label: <Link to="/news">News</Link>,
            key: 'news',
        },
    ]
  return (
    <div className="nav-container">
        <div className="logo-container flex items-center">
            <Avatar src={icon} size={"large"}/>
            <Typography.Title level={2} style={{marginTop: 10}} className='logo'>
                <Link to={"/"}>CryptoVerse</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            {/* <Button className='menu-control-container'>nfre</Button> */}
        </div>
          {activeMenu && <Menu theme='dark' items={items}></Menu>}
    </div>
  )
}

export default Navbar