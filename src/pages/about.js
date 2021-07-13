import React from "react";
import '../component/content.scss';
import profile from '../files/profile.jpg';

const aboutme=(
<div className="body">
    <div className="boxWrapper">
        <div className="boxTitle">
            <h1 className="boxHeading">about me</h1>
            <h2 className='subtitle'></h2>
            <hr className='contentbr'></hr>
        </div>
        <div className="box" style={{overflow: "auto"}}>
        <img src={profile} style={{maxWidth: "25%", height: "auto", float: "right"}}/>
            <h2>
                howdy!
            </h2>
            
            <p>
                I love to cook, play games, and learn by doing.
            </p>
            <p>
                As far back as I can remember, I was always drawn to the computer. One of my earliest childhood photos is of me smirking in front of my
                father's Compaq, proud of the gibberish I just typed and recolored in Microsoft Word. As I grew up, my interest in the world of silicon 
                deepened, with my father getting me involved in understanding and building PC's. I fed my curiosity and continued to tinker with computers,
                learning Lua in 5th grade and building my first PC in 7th grade. By high school, I had the opportunity to take my first coding class, and
                with my father's knowledge to guide me, I quickly caught on to the nuances of programming.
            </p>
            <p>
                Outside of programming, I enjoy expressing myself in the kitchen. Cooking is something I love to do in my spare time and truly believe that
                there is nothing that brings people together like a good home cooked meal. I especially enjoy trying new recipes that challenge my abilities or expose me
                to new flavors from around the world. Growing up in the Houston area to multicultural parents from El Paso, I've never been one to shy away from trying a new food.
                Food has truly given me an appreciation for the diverse tastes from cultures all around the world. 
            </p>
        </div>
    </div>
    <blockquote class="blockquote text-center" style={{marginTop:"3%"}}>
    <p class="mb-0">“You just can't beat the person who never gives up.”</p>
    <footer class="blockquote-footer"><cite>Babe Ruth</cite></footer>
    </blockquote>
</div>
);

const about = () => {

    return (
    <div className="content">
        {aboutme}
    </div>
    );
};

export default about;