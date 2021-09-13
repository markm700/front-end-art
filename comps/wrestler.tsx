import { FunctionComponent } from 'react'

interface Props {
    name: string,
    company: string,
    division: string
}

const Wrestler: FunctionComponent<Props> = ({name,company,division}) => {
    return(
        <div> 
            <h2> {name} </h2>
            <p>Company: {company}</p>
            <p>Division: {division}</p>
        </div>
    )
}

export default Wrestler