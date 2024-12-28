

interface DashboardCardProps {
    title: string,
    description: string,
    icon: React.ReactNode
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex flex-col items-center col-span-1 gap-6 px-10 py-5">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-400">
                        {icon}
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-2 text-center">
                    <h4 className="text-2xl font-extrabold text-dark-grey-900">{title}</h4>
                    <p className="font-medium text-grey-700">{description}</p>
                </div>
        </div>
    )
}

export default DashboardCard