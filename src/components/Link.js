import Globe from '../assets/globe.png';

const Link = ({name,link}) => {
    return (
        <a href={link} target="_blank" className="link">
            <img src={Globe} alt="link" className="link__img" />
            <span className="link__name">{name}</span>
        </a>
    )
}

export default Link;