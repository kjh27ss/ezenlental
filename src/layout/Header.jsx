import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { AiOutlineGlobal } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { TfiSearch } from 'react-icons/tfi'

const Header = () => {
  return (
    <div className="header">
        <div className="container border d-flex justify-content-between">
            <div className="logo mt-3">
                logo
            </div>
            <div className="nav">
                <ul className='d-flex mt-3'>
                    <li><a href="#">베스트</a></li>
                    <li><a href="#">제품</a></li>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">이용후기</a></li>
                </ul>
            </div>
            <div className="blank"></div>
            <div className="utility d-flex">
                <Dropdown className='mt-2'>
                    <Dropdown.Toggle variant="none">
                        <AiOutlineGlobal size={24}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-list mt-1'>
                        <Dropdown.Item href="#" className='language'>한국어</Dropdown.Item>
                        <Dropdown.Item href="#" className='language'>English</Dropdown.Item>
                        <Dropdown.Item href="#" className='language'>中文</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                <div className="myicon">                    
                    <Dropdown className='mt-2'>
                    <Dropdown.Toggle variant="none">
                        <GoPerson size={24} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='member-dropdown mt-1'>
                        <Dropdown.Item href="#" className='login'>로그인</Dropdown.Item>
                        <Dropdown.Item href="#" className='register'>회원가입</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="search mt-3"><TfiSearch size={22}/></div>
            </div>
        </div>
    </div>
  )
}

export default Header