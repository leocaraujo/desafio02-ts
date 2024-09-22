import { Center, Input } from "@chakra-ui/react";
import ButtonDefault from "./Button";
import { login } from "./../services/login";

export const Card = () => {
  return (
    <div>
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" marginTop={"15px"} type="email"/>
      <Input placeholder="password" marginTop={"15px"} type="password" />

      <ButtonDefault action={login}>Login</ButtonDefault>
    </div>
  );
};
