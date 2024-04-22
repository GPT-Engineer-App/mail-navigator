import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

function Inbox() {
  const emails = [
    { sender: "John Doe", subject: "Meeting Update" },
    { sender: "Jane Smith", subject: "Project Proposal" },
    { sender: "Acme Corp", subject: "Invoice #12345" },
  ];

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" mb={4}>
        Your Inbox
      </Text>
      {emails.map((email, index) => (
        <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
          <Text fontSize="lg" fontWeight="bold">
            {email.sender}
          </Text>
          <Text>{email.subject}</Text>
        </Box>
      ))}
    </VStack>
  );
}

export default Inbox;
