import { useState } from "react"
type datatype = {
    label: string,
    to: string,
    children?: datatype[]
}
const RecursiveNavigationMenu = ({ details }:{details:datatype[]} ) => {
    interface labelCont {
        [key: string]: boolean
    }
    const [labelsContainer, setLabelsContainer] = useState<labelCont>({})

    const includeOrExcludeLabel = (lab: string) => {
        setLabelsContainer((prevContainer: labelCont) => {
            return (
                {
                    ...prevContainer,
                    [lab]: !labelsContainer[lab]
                }
            )
        })
    }
    return (
        <ul>
            {
                details.map((ele:datatype) => {
                    return (
                        <li>
                            <div onClick={() => {
                                includeOrExcludeLabel(ele.label);
                            }}>{ele.label}</div>
                            {(labelsContainer[ele.label] && ele.children && ele.children.length > 0) ? (
                                <RecursiveNavigationMenu details={ele.children} />
                            ) : null}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RecursiveNavigationMenu