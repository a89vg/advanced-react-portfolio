import {Image, Stack, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc}) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack bg="white" color="black" borderRadius="0.8em" >
            <Image src={imageSrc} w="100%" borderRadius="0.8em"/>
            <Stack marginX={4} paddingY={3}>
                <Text fontSize="1.1em" fontWeight="bold" >{title}</Text>
                <Text fontSize="1em" color="gray">{description}</Text>
                <Text>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
            </Stack>
        </VStack>
    );
};

export default Card;
