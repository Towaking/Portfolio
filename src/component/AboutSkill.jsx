export const AboutSkill = ({title, progress}) => {
    return (
        <div className='flex items-center justify-center gap-2 w-full'>
            <div className="w-full mt-4">
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <span className="text-sm font-semibold">{title}</span>
                        <span className="text-sm font-semibold">{progress}%</span>
                    </div>
                    <div className="flex mb-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full"
                                 style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}