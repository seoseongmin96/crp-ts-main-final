import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react'
import Link from 'next/link'


const Nav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="https://ifh.cc/g/KtohFH.png" style={{width:200+"px"}}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link" href="/company/profile">개발자들</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/company/oursite">사이트 소개</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/site/aboutSite">관련 사이트</a>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              전체 기능
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/plagiarism/select">표절 및 분석 프로그램</a></li>
              <li><a className="dropdown-item" href="/music/musicPlay">음원 검색</a></li>
              
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  );
}

export default Nav