import './index.scss';

export default function Card(props) {
    return (
        <div className="card-body">
            <img src={props.src} alt={props.title}/>
            <h2>{props.title}</h2>
            <hr/>
            <p>{props.description}</p>
        </div>
    )
}