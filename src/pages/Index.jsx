import { Box, Button, Container, Flex, Heading, IconButton, Image, Input, Link, Stack, Text, Textarea, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from "react-router-dom";

const Index = () => {
  const bgColor = useColorModeValue("purple.100", "green.200");

  return (
    <Router>
      <Container maxW="container.xl" p={0}>
        <Flex direction="column" minH="100vh" bg={bgColor}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Flex>
      </Container>
    </Router>
  );
};

const Header = () => {
  return (
    <Box as="header" width="full" p={4} shadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          ODDI Dance Studio
        </Heading>
        <Stack direction="row" spacing={4}>
          <Button as={RouterLink} to="/" variant="ghost">
            Home
          </Button>
          <Button as={RouterLink} to="/contact" variant="ghost">
            Contact
          </Button>
          <Button as={RouterLink} to="/reviews" variant="ghost">
            Reviews
          </Button>
          <Button as={RouterLink} to="/register" variant="ghost">
            Register
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

const Home = () => {
  return (
    <VStack spacing={8} p={8} alignItems="center">
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to ODDI Dance Studio!
      </Text>
      <Image src="https://images.unsplash.com/photo-1615213253844-9a9d661d40d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHN0dWRpb3xlbnwwfHx8fDE3MTUzMzA5MzN8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="full" />
      <Text>Join us to explore the world of dance and discover your passion!</Text>
    </VStack>
  );
};

const Contact = () => {
  return (
    <VStack spacing={4} p={8} alignItems="center">
      <Text fontSize="2xl" fontWeight="bold">
        Contact Us
      </Text>
      <Flex direction="column" alignItems="center">
        <IconButton icon={<FaPhone />} aria-label="Phone" />
        <Text>+123 456 7890</Text>
        <IconButton icon={<FaEnvelope />} aria-label="Email" />
        <Text>info@oddidancestudio.com</Text>
        <IconButton icon={<FaMapMarkerAlt />} aria-label="Location" />
        <Text>123 Dance Ave, Dance City</Text>
      </Flex>
    </VStack>
  );
};

const Reviews = () => {
  return (
    <VStack spacing={4} p={8} alignItems="center">
      <Text fontSize="2xl" fontWeight="bold">
        What Our Students Say
      </Text>
      <Box p={4} shadow="md" borderWidth="1px">
        <Text fontWeight="bold">Anna Smith</Text>
        <Text>"Amazing experience, the instructors are very professional!"</Text>
      </Box>
      <Box p={4} shadow="md" borderWidth="1px">
        <Text fontWeight="bold">John Doe</Text>
        <Text>"A great place to learn and have fun! Highly recommended."</Text>
      </Box>
    </VStack>
  );
};

const Register = () => {
  return (
    <Flex direction="column" p={8} alignItems="center">
      <Text fontSize="2xl" fontWeight="bold">
        Register for Classes
      </Text>
      <Input placeholder="Your Name" my={2} />
      <Input placeholder="Email Address" my={2} />
      <Textarea placeholder="Your Message" my={2} />
      <Button colorScheme="purple" my={2}>
        Submit
      </Button>
    </Flex>
  );
};

const Footer = () => {
  return (
    <Box as="footer" p={4} mt="auto" bg="purple.700" color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Text>© 2023 ODDI Dance Studio</Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter />
          </Link>
          <Link href="https://youtube.com" isExternal>
            <FaYoutube />
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
