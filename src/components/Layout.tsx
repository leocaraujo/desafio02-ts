import { Footer } from "./Footer";
import { Header } from "./Header/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header title={"Desenvolvendo o Dio Bank"} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
