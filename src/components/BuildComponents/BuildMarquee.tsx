import { cn } from "@/lib/utils"
import {
    ListTodo,
    Calendar,
    Calculator,
    Music,
    ShoppingCart,
    Clock,
    Camera,
} from "lucide-react"

const reviews = [
    {
        icon: ShoppingCart,
        body: "Develop an product page",
    },
    {
        icon: ListTodo,
        body: "Build a todo list app",
    },
    {
        icon: Calendar,
        body: "Create a calendar app",
    },
    {
        icon: Calculator,
        body: "Develop a calculator",
    },
    {
        icon: Music,
        body: "Create a music player",
    },
    
    {
        icon: Clock,
        body: "Create a pomodoro timer",
    },
    {
        icon: Camera,
        body: "Develop a photo gallery app",
    },
]

const ReviewCard = ({
    icon: Icon,
    body,
    onClick,
}: {
    icon: React.ElementType
    body: string
    onClick: () => void
}) => {
    return (
        <figure
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl border pt-1 pb-1 pr-2 pl-2 m-1",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-muted dark:hover:bg-[#20B8CD]/30",
            )}
            onClick={onClick}
        >
            <div className="flex items-center space-x-2">
                <Icon className="h-3 w-3" />
                <blockquote className="text-[10px] whitespace-nowrap">{body}</blockquote>
            </div>
        </figure>
    )
}

export function BuildMarquee({ setSearchQuery }: { setSearchQuery: (query: string) => void }) {
    return (
        <div className="w-full max-w-2xl mx-auto mb-6 relative pt-4">
            <div className="flex flex-wrap justify-center">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} onClick={() => setSearchQuery(review.body)} />
                ))}
            </div>
        </div>
    )
}

