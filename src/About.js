import profile from './profile.png';
import introtext from './introtext';
function About(){
    return(
        <div className="about">
            <h1>
                About Me
            </h1>
            <img alt="This wouldn't load for some reason." src={profile}></img>
            <p>
                {introtext}
            </p>
        </div>
    )
}
export default About