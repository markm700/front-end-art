import { FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

type Props = {
    name: string,
    company: string,
    division: string
}

const Wrestler: FunctionComponent<Props> = ({name,company,division}) => {
    return(
        <div className={styles.container}>
            <h1> {name} </h1>
            <p>Company: {company}</p>
            <p>Division: {division}</p>
        </div>
    )
}

export default Wrestler