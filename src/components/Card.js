import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      alignItems="flex-start"
      backgroundColor="white"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      position="relative"
      zIndex={1}
    >
      <Image src={imageSrc} borderRadius="lg" width="100%" />
      <Heading as="h3" size="md" color="black"> {/* Set text color to black */}
        {title}
      </Heading>
      <Text color="black"> {/* Set text color to black */}
        {description}
      </Text>
      <HStack>
        <Text color="black"> {/* Set text color to black */}
          Learn more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" /> {/* Set icon color to black */}
      </HStack>
    </VStack>
  );
};

export default Card;