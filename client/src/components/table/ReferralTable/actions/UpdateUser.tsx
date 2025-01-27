import { FaPencil } from "react-icons/fa6";

interface UpdateUserProps {
    id: string
}

export const UpdateUser: React.FC<UpdateUserProps> = ({
    id
}) => {
    return (
        <FaPencil size={18} />
    )
}