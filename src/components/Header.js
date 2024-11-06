import React, {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {Box, HStack, Link, SkipNavLink} from "@chakra-ui/react";

const socials = [
    {
        id: 1,
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        id: 2,
        icon: faGithub,
        url: "https://github.com",
    },
    {
        id: 3,
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        id: 4,
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        id: 5,
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

//Higher order component
const withSmoothScroll = (AnchorLink, sectionId) => {
    return (props) => {
        return <AnchorLink {...props} onClick={(e) => handleClick(sectionId)}>{props.children}</AnchorLink>;
    };
}

const ContactLink = withSmoothScroll(Link, "contactme");
const ProjectsLink = withSmoothScroll(Link, "projects");

const Header = () => {
    const boxRef = useRef(undefined);
    let previousY = useRef(0);

    useEffect(() => {
        const handleScroll = (e) => {
            if (window.scrollY < previousY) {
                boxRef.current.style.transform = 'translateY(0)';
            } else {
                boxRef.current.style.transform = 'translateY(-200px)';
            }
            previousY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            ref={boxRef}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={8}>
                            {socials.map(item => (
                                <a href={item.url} key={item.id}>
                                    <FontAwesomeIcon size="2x" icon={item.icon}/>
                                </a>
                            ))}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <ProjectsLink>Projects</ProjectsLink>
                            <ContactLink>Contact Me</ContactLink>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};

export default Header;
