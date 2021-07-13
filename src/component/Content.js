//Content.js
import React from 'react';
import './content.scss';

const Content=() => {
  const data=(
    <div className="boxWrapper">
      <div className="boxTitle">
        <h1  className="boxHeading">portfolio website</h1>
        <h2 className='subtitle'>date: march 14th, 2020</h2>
         <hr className='contentbr'></hr>
      </div>
      <div className="box">
        <p style={{marginBottom: "2%"}}>
          <h4>My thoughts on portfolio sites</h4>
          As someone who decided to turn their passion for coding into a career, in my personal opinion
          creating an impressive portfolio website is the perfect way for a programmer to showcase
          the work done in previous projects, as well as demonstrate their design skills and
          coding prowess.
        </p>
        <p style={{marginBottom: "2%"}}>
          <h4>Why React?</h4>
          In my case, I initially chose to develop my website using React.js since it was a popular framework
          I had limited exposure to at the time. From the start, I was hand-coding all of my JSX and
          the accompanying CSS - which, in hindsight, was me "reinventing the wheel". One of the greatest
          things about modern, open-source software is that there are countless great frameworks, API's, and
          CMS' to choose from when building a website. React's vast libraries of plugins and components makes it easy to
          implement functionality into your website without the need to write excessive amounts of code.
        </p>
        <p style={{marginBottom: "2%"}}>
          <h4>Why Bootstrap?</h4>
          As I grew frustrated with hand-coding my website's aesthetics, I eventually caved and began using the 
          React-Bootstrap UI framework, and the difference it made to my development progress was a night-and-day difference.
          After a short time reading the documentation and becoming familiar with how Bootstrap worked in a React app, 
          all it took was roughly twenty minutes of coding to create the animated dropdown menu I had been trying for days to
          create on my own.
        </p>
        <p style={{marginBottom: "2%"}}>
          <h4>CI/CD with AWS</h4>
          Last, but not least, is my integration of my site into AWS. Currently, I have a CI/CD pipeline set up from my GitHub
          repository. Utilizing AWS Amplify, I created an app for my website, which contains a front and back end environment. 
          The backend environment is a container for the cloud capabilities added to the website such as any API's or storage.
          When code is updated in the repository, Amplify will automatically rebuild the code and reflect the updated changes in the frontend
          environment with zero downtime. Since I don't have this site hosted yet - it will display as being on the "xxx.amplifyapp.com" domain.
          Although I don't really plan on making many changes to this site aside from adding new content every now and then,
          it was great to have an opportunity to experience CI/CD hands-on in a project.
        </p>
        <p>
          <h4>Closing thoughts</h4>
          Although it has been tedious at times, this website has brought me so much joy from being able to learn new technologies
          and implement them in a project of my very own, hands-on. I have always found myself doing new projects in a way that I've never done before,
          simply for the sake of trying and learning something new. This project is no exception. Now, to find what I want to learn next..
        </p>
      </div>
    </div>
  );
  
return (
    <div className="content">
        {data}
    </div>
  )
}
export default Content;