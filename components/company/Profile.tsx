import React from 'react';
import styles from "@/styles/Profile.module.css";
import style from '@/styles/Float.module.css'

const Profile: React.FC = () => {
return(<><br/> <br/> <br/> 
<h2>개발자 프로필</h2>
          <br/><br/>
<div className='container h-100'>
<div className= "row d-flex justify-content-center align-items-center h-100">
<div className="card" style={{maxWidth: 20+"rem"}}>
<img src="https://ifh.cc/g/v681j8.jpg" width={"50%"} height={"50%"} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">조현국</h5> <br/> 
        <p className="card-text">NLP <br/> Transfomer, <br/> Bert, GPT-3 <br/> Pytorch  <br/> VoiceBot,Lyrics Software Developer</p>
        <a href="/plagiarism/upload" className="btn btn-outline-dark">표절 검사</a>
    </div>
</div> &nbsp; &nbsp;
<div className="card" style={{maxWidth: 20+"rem"}}>
    <img src="https://ifh.cc/g/adgod5.jpg" width={"50%"} height={"50%"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">최은아</h5> <br/> 
            <p className="card-text"> GAN <br/> Tensorflow <br/> Plagiarism & Analysis Software Developer</p>
            <a href="/analysis/anupload" className="btn btn-outline-dark">악보 분석</a>
        </div>
</div>
<div className="card" style={{maxWidth: 20+"rem"}}>
    <img src="https://ifh.cc/g/MGlTj5.jpg" width={"50%"} height={"50%"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">권혜민</h5> <br/> 
            <p className="card-text">GAN <br/>Tensorflow <br/> SoundSearch Software Developer </p>
            <a href="/analysis/anupload" className="btn btn-outline-dark">악보 분석</a>
        </div>
</div>
<div className="card" style={{maxWidth: 20+"rem"}}>
    <img src="https://ifh.cc/g/dl1Zlh.jpg" width={"50%"} height={"50%"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">서성민</h5> <br/> 
            <p className="card-text"> Type, JavaScript <br/> React, Next <br/> Composition Software Developer</p>
            <a href="/analysis/anupload" className="btn btn-outline-dark">악보 분석</a>
        </div>
</div>
</div>
</div>
<a href="#" className={style.float}>
<img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
</a>

</>)
}

export default Profile;