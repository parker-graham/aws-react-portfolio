//Content.js
import React from 'react';
import './content.css';

const Content=() => {
  const data=(
    <div className="boxWrapper">
      <div className="boxTitle">
        <h1>amazon web services</h1>
        <p className='subtitle'>date: march 14th, 2020 | category: projects</p>
         <hr className='contentbr'></hr>
      </div>
      <div className="box">
        <p>My div content </p>
      </div>
    </div>
  );
  const data1=(
    <div className="boxWrapper">
      <div className="boxTitle">
        <h1>arma 3 modding</h1>
        <p className="subtitle">date: march 12th, 2020 | category: projects</p>
        <hr className='contentbr'></hr>
      </div>
      <div className="box">
        <p>My div content </p>
      </div>
    </div>
  );
  const data2=(
    <div className="boxWrapper">
      <div className="boxTitle">
        <h1>eating the quadrapatty</h1>
        <p className='subtitle'>date: march 11th, 2020 | category: fun</p>
        <hr className='contentbr'></hr>
      </div>
      <div className="box">
        <p>My div content </p>
      </div>
    </div>
  );
  
return (
    <main className="content">
        {data}
        {data1}
        {data2}
    </main>
  )
}
export default Content;