function Button(props){
    return(
        <button type={props.type} className={`flex items-center justify-center font-Poppins ${props.className}`}>{props.children}</button>
    )
}

export default Button;