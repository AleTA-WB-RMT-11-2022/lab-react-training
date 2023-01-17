function Greetings(props){

    
    
    return (
            <h1>
                {props.lang === 'de' && 'Hallo '}
                {props.lang === 'en' && 'Hi '}
                {props.lang === 'es' && 'Hola '}
                {props.lang === 'fr' && 'Bonjour '}
                {props.children}
            </h1>
    )
}
export default Greetings