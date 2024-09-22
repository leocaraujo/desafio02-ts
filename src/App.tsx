import { Box } from "@chakra-ui/react";

import { Card } from "./components/Card";

function App() {
  return (
    <Box
      minHeight="90vh"
      backgroundColor="#9413dc"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        backgroundColor="#FFFFFA"
        borderRadius="25px"
        padding="25px"
        width={"30%"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Card />
      </Box>
    </Box>
  );
}

export default App;
