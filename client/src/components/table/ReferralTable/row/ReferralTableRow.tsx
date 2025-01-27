import { UpdateUser, DeleteUser } from "~components/table/ReferralTable/actions";

import { User } from "~root/types/user";

interface ReferralTableRowProps {
  data: User[];
}

const ReferralTableRow: React.FC<ReferralTableRowProps> = ({ data }) => {
  return (
    <>
      <tbody className="text-gray-400 text-sm">
        {data.map((user) => (
          <tr key={user.id} className="border-b">
            <td className="px-4 py-2">{user.given_name}</td>
            <td className="px-4 py-2">{user.surname}</td>
            <td className="px-4 py-2">{user.email_address}</td>
            <td className="px-4 py-2">{user.phone_number}</td>
            <td className="px-4 py-2" align="center">
              <div className="flex gap-x-3 items-center justify-center">
                <UpdateUser id={user.id} />
                <DeleteUser id={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      
    </>
  );
};

export default ReferralTableRow;
