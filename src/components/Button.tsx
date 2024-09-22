import { Button, Center } from "@chakra-ui/react";

interface IButton {
  action: () => void;
  children: string;
}

const ButtonDefault = ({ action, children }: IButton) => {
  return (
    <Center>
      <Button
        colorScheme="teal"
        marginTop={"15px"}
        size={"md"}
        onClick={action}
        marginRight={"10px"}
      >
        {children}
      </Button>
    </Center>
  );
};

export default ButtonDefault;
