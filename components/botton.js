import Link from 'next/link'

export default function Bouton({title, link, cn}){
    return(
        <div className = {`btn`}>
            <a className = {`${cn}`}>
            <Link href = {link} >
                {title}
            </Link>
            </a>
        </div>
    )
}