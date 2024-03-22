import Nav from "../component/ui/Nav";
export default function HomeLayout({ children }) {
    return (
      <main>
      <Nav/>
        <div>{children}</div>
      </main>
    );
  }
  