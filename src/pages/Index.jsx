import { Box, Button, Flex, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaPaperPlane, FaInbox, FaStar, FaTrash } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSendEmail = () => {
    toast({
      title: "Email Sent",
      description: "Your email has been sent successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" p={5}>
      <Box p={5} shadow="md" borderWidth="1px">
        <VStack spacing={4}>
          <Input placeholder="To" />
          <Input placeholder="Subject" />
          <Input placeholder="Message" as="textarea" height="150px" />
          <Button rightIcon={<FaPaperPlane />} colorScheme="blue" onClick={handleSendEmail}>
            Send Email
          </Button>
        </VStack>
      </Box>
      <Flex mt={10} alignItems="center" justifyContent="space-between">
        <Button leftIcon={<FaInbox />} colorScheme="teal" variant="solid">
          Inbox
        </Button>
        <Button leftIcon={<FaStar />} colorScheme="yellow" variant="solid">
          Starred
        </Button>
        <Button leftIcon={<FaTrash />} colorScheme="red" variant="solid">
          Trash
        </Button>
      </Flex>
    </Flex>
  );
};

export default Index;
