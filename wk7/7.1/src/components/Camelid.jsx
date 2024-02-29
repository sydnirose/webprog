function Camelid({name, fact, image}) {
    console.log(name)
    return (
        <div>
            <h1>{name}</h1>
            <p>{fact}</p>
            <div>{image}</div>
        </div>
    );
}
export default Camelid;