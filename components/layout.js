export default function Layout({children, cn, style}){
    return(
        <div className = {`layout ${cn}`} style = {style}>
            {children}
        </div>
    )
}