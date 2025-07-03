import { Post, User } from "@/types";
import { MdClear } from "react-icons/md";

//define oque o componente espera receber
type Props = {
  user: User;
  posts: Post[];
  loading: boolean;
  onClose: () => void;
};

export default function Modal({ user, posts, loading, onClose }: Props) {
  return (
    //fundo modal
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      {/*Estrutura modal */}
      <div
        className="bg-gray-300 p-6 rounded-lg max-w-full max-h-full relative shadow-lg w-3/4 h-5/6"
        onClick={(e) => e.stopPropagation()}
      >
        {/*botão para fechar o modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <MdClear />
        </button>
        {/*titulo modal */}
        <h2 className="text-lg font-semibold mb-2">Posts de {user.name}</h2>

        {loading ? (
          //animação de loading
          <div className="flex justify-center items-center h-full">
            <div className="loader" />
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[75vh] pr-2">
            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.id} className="bg-gray-200 p-2 rounded">
                  <h3 className="font-bold uppercase">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
