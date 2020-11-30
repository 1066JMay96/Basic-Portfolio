import React from 'react';
import { Link } from 'react-router-dom';
function Aboutme() {
  return(
    <main className="container">
    <section className="row">
      <div className="col-md-8">
        <article className="block">
          <h1 className="block-header">About Me</h1>
          <hr />
          <img src="imgs/Face.JPG" alt="" id="about-image" />
          <p>Hi my name is William May. I am a fullstack developer and former certified personal trainer. I am currently enrolled with Rutgers in a fullstack webdevelopment bootcamp as well as a certified ethical hacking program with EC council. On my past time I enjoy hacking trolling and weight training. I'm from North Jersey. I mostly work with Javascript, however I'm also proficient with assembly.</p>
          <br />
          <p>
            you can find me at <a href="https://www.linkedin.com/in/william-may-7b1428200/">LinkedIn</a>
              and also at <a href="https://github.com/1066JMay96">Github!</a>
          </p>
        </article>
      </div>
    </section>
  </main>
  
  )
}
export default Aboutme;