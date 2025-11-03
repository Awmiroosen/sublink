import Container from "@/components/ui/Container";
import Header from "@/components/header/header";
import Configs from "@/components/Configs";
import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <section className="w-full p-1 overflow-hidden grid grid-cols-3 gap-4">
          <Configs />
        </section>
        <Modal/>
      </Container>
    </main>
  );
}
