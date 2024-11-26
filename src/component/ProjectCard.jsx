export const ProjectCard = (props) => {
    return (
        <div className='sm:w-full h-fit z-50 bg-gray-900 hover:scale-110'>
            <img src={props.ProjectImages} className='object-center object-cover w-full h-[200px]'/>
            <div className='p-2 min-h-[150px] max-h-fit sm:w-full  flex flex-col gap-2'>
                <h1 className='font-bold overflow-clip break-words'>{props.ProjectName}</h1>
                <small>{props.ProjectLanguage}</small>
                <details className='italic'>
                    <summary>Description</summary>
                    <p>{props.ProjectDescription}</p>
                </details>
            </div>
        </div>
    )
}