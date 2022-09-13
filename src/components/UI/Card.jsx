function Card(props){
    return(
        <li className={`flex flex-col rounded-md ${props.className}`}>
            {props.children}
        </li>
    )
}

export default Card;