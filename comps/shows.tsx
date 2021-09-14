import { FunctionComponent } from 'react'
import Wrestler from '../comps/wrestler'
import styles from '../styles/Home.module.css'

interface Props {
    name: string,
    titles: Array<string>,
    rosterSize: number,
    imagePath?: string
}

const Show: FunctionComponent<Props> = ({name,titles,rosterSize,imagePath}) => {
    return(
        <div className={styles.main}> 
            <h1> 
               <img src={imagePath} />
              {name} 
             </h1>
            <p>Titles:</p>
            <ul> {titles.map(title => (
                <li key={title}>{title}</li>
            ))}
            </ul>
            <p>Roster Size: {rosterSize}</p>
            <Wrestler name={"Santos Escobar"} company={name} division={"North American Championship"} />
            <Wrestler name={"Kay Lee Ray"} company={name} division={"NXT Women's Championship"} />
        </div>
    )
}

export default Show