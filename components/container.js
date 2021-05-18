export default function Container({children, cn, style}){
    
    return(
        <div className = {`container ${cn}`} style = {style}>
            {children}
        </div>
    )
}


export function Nav_Container({children, cn, style}){
    return(
        <div className = {`nav_container ${cn}`} style = {style}>
            {children}
        </div>
    )
}

export function Gallerie_Container({children, cn, style}){
    
    return(
        <div className = {`Gallerie_container ${cn}`} style = {style}>
            {children}
        </div>
    )
}