import Folder from "./Folder";
import Link from "./Link";
import MusicPlayerGif from '../assets/doge-music-player.gif';

const Header = ({handleCurrentProject}) => {
    const projects = [
        {
            name: 'Music Player App',
            gif: MusicPlayerGif,
            github: 'https://github.com/soufianez0uhair/music-player',
            live: 'https://soufianez0uhair.github.io/music-player'
        },
        {
            name: 'Quiz App',
            gif: 'https://soufianez0uhair.github.io/personal-site/img/quiz-app.gif',
            github: 'https://github.com/soufianez0uhair/quiz-app',
            live: 'https://soufianez0uhair.github.io/quiz-app'
        },
        {
            name: 'Tech Blog App',
            gif: 'https://soufianez0uhair.github.io/personal-site/img/tech-blog.gif',
            github: 'https://github.com/soufianez0uhair/tech-blog',
            live: "https://soufianez0uhair.github.io/tech-blog"
        }
    ]

    const contactLinks = [
        {
            name: 'Twitter',
            link: 'https://twitter.com/soufianez0uhair'
        },
        {
            name: 'Linkedin',
            link: 'https://linkedin.com/in/soufianezouhair'
        },
        {
            name: 'soufianezouhaironline@gmail.com',
            link: 'mailto:soufianezouhaironline@gmail.com'
        },
        {
            name: '+212614671572',
            link: 'tel:+212614671572'
        }
    ]

    return (
        <header>
            <section className="about">
                <h1 className="about__title">// About me</h1>
                <p className="about__text">
                    I'm Soufiane Zouhair, a Web Developer focusing on Frontend Engineering. I use ReactJs to make interactive and modern web apps. I believe we live in the technology empire era, so I don't want to be left behind! I constantly learn new things every day! If you've any interest in my skills, please check my contact info via contact folder.
                </p>
            </section>
            <ul className="navbar">
                <Folder name="Projects" handleCurrentProject={handleCurrentProject} projects={projects} />
                <Folder name="Contact" links={contactLinks} />
                <Link name="Github" link="https://github.com/soufianez0uhair" />
            </ul>
        </header>
    )
}

export default Header;