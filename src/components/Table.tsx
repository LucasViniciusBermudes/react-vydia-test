import { User } from "@/types";

//props que o componente espera receber
type UserTableProps = {
  users: User[];
  onUserClick: (user: User) => void;
};

export default function UserTable({ users, onUserClick }: UserTableProps) {
  return (
    //div que evita o overflow
    <div className="overflow-x-auto mx-auto max-w-[1200px]">
      {/*tabela*/}
      <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
        {/*cabeçalho tabela*/}
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Username
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
          </tr>
        </thead>
        {/*corpo tabela */}
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => onUserClick(user)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
