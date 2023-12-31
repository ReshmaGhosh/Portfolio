import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From websites to android/ios
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "website" ? (
            <ToggleButton
              active
              value="website"
              onClick={() => setToggle("website")}
            >
              WEBSITE'S
            </ToggleButton>
          ) : (
            <ToggleButton value="website" onClick={() => setToggle("website")}>
              WEBSITE'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "app" ? (
            <ToggleButton
              active
              value="app"
              onClick={() => setToggle("app")}
            >
              IOS APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="app"
              onClick={() => setToggle("app")}
            >
              IOS APP'S
            </ToggleButton>
          )}
          <Divider />
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
