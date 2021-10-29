const Welcome = (props) => {
    const {greeting, name} = props
    return(
        <h1> {greeting}, {name} </h1>
    )
}

Welcome.defaultProps = {
    greeting: "Hello",
    name: "Narasimha",
}

export default Welcome