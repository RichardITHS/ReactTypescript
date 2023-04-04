interface GreetProps {
    name: string,
    age: number
}


export const Greet = (props: GreetProps) => {
    return (
        <>
        <div>
            <h2>Hej Välkommen {props.name}</h2>
            <h2>Du är {props.age +1} år gammal</h2>

        </div>
        </>
    )
}
