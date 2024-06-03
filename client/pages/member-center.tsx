import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/router";
import React from "react";

export default function MemberCenter() {
  const { auth } = useAuth();
  const router = useRouter();
  console.log(auth);
  return (
    <main className="flex justify-center h-screen items-center">
      <section className="flex flex-col items-center h-[500px] w-[400px] rounded-xl bg-sky-200 relative">
        <h1 className="text-[30px] my-10">會員資訊</h1>
        <span className="my-10 space-y-5">
          <div className="text-[20px]">會員名稱: {auth.data.username}</div>
          <div className="text-[20px]">Email: {auth.data.email}</div>
        </span>
        <button
          className="btn absolute bottom-10 right-10"
          onClick={() => router.back()}
        >
          回上一頁
        </button>
      </section>
    </main>
  );
}
