function Card(props) {

    return (
        <div className="card" 
            style={{ backgroundColor: props.bgColor, width: props.width}}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h3>{props.description}</h3>
        </div>
    )
}

export default Card