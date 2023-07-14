"use client";
import { useState } from "react";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const [name, setName] = useState("Carlos");
  const [email, setEmail] = useState("carlos@gmail.com");
  const {
    data: users,
    isFetching,
    isLoading,
    refetch: refetchUsers,
  } = trpc.getUsers.useQuery();

  const addUser = trpc.addUsers.useMutation({
    onSuccess: () => {
      void refetchUsers();
    },
  });

  const handleClick = async () => {
    addUser.mutate({
      name,
      email,
    });
  };

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen bg-slate-950 text-white flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <div>
          {users?.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
        <div>
          <button
            onClick={handleClick}
            className="px-4 py-2 border border-white"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}
