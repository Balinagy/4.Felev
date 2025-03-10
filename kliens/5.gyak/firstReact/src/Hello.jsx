import './Hello.css'
import cn from 'classnames'

function Hello(props) {
    return(
        <>
            {props.name === '' ?
            <h1>Nincs kit üdvözölni</h1>
            :[...Array(props.count)].map((e,i)=>
                <h1 className={cn({'orange': props.name === 'React'})}
                 key={i}>Hello {props.name}!</h1>)
            }
            {props.children}
        </>
    );
}

export default Hello;