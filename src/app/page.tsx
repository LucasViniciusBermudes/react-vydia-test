import Header from "@/components/header";
import ListUsers from "@/components/ListUsers";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ListUsers />
      </main>
    </>
  );
}
