import Bouton from './botton';

export function Title({title}){
    return(
        <div className = 'Title'>
            <p>{title}</p>
        </div>
    )
}
export function Title_1({title, btn_title, link}){
    return(
    <div className = 'container_title'>
        <Title title = {title} />
        <Bouton title = {btn_title} link = {`${link}`}  cn = 'aliceblue' />
    </div>
    )
}