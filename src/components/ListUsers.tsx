"use client";

import { useEffect, useState } from "react";
import { fetchUsers, fetchPostsByUser } from "@/services/api";
import type { User, Post } from "@/types";
import Table from "@/components/Table";
import Modal from "@/components/Modal";

export default function ListUsers() {
  //lista de usuários
  const [users, setUsers] = useState<User[]>([]);
  //usuário selecionado
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  //posts do usuário selecionado
  const [posts, setPosts] = useState<Post[]>([]);
  //carregamento de post e usuários
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);

  //assim que o componente é renderizado ele busca os usuarios da api
  useEffect(() => {
    async function loadUsers() {
      setLoadingUsers(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error("Erro ao carregar usuários", err);
      } finally {
        setLoadingUsers(false);
      }
    }

    loadUsers();
  }, []);

  //quando o usuario clica em um nome
  async function handleUserClick(user: User) {
    //salva o usuario clicado
    setSelectedUser(user);
    setLoadingPosts(true);
    try {
      const postsData = await fetchPostsByUser(user.id);
      setPosts(postsData);
      //busca os posts desse usuario e exibe no modal
    } catch (err) {
      console.error("Erro ao carregar posts", err);
    } finally {
      setLoadingPosts(false);
    }
  }

  //fecha o modal
  function closeModal() {
    setSelectedUser(null);
    setPosts([]);
  }

  return (
    <div className="p-4 max-w-full max-h-full mx-auto">
      <h1 className="flex justify-center items-center text-xl font-bold mb-4 select-none">
        Clique para ver os posts dos usuários
      </h1>

      {loadingUsers ? (
        //animação de loading
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="loader" />
        </div>
      ) : (
        <Table users={users} onUserClick={handleUserClick} />
      )}

      {selectedUser && (
        <Modal
          user={selectedUser}
          posts={posts}
          loading={loadingPosts}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
