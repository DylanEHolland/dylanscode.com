import React from "react";
import { Calendar, Github, Linkedin, Twitter } from "lucide-react";
import styled from "styled-components";
import {
  CALENDLY_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from "../constants/links";

const StyledTwitterIcon = styled(Twitter)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1); /* Slightly increases the size */
    color: #1da1f2; /* Example color change on hover */
  }
`;

const StyledLinkedinIcon = styled(Linkedin)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1);
    color: #005582;
  }
`;

const StyledCalendarIcon = styled(Calendar)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1);
    color: #0057cc;
  }
`;

const StyledGithubIcon = styled(Github)`
  transition: all 0.2s ease;
  &:hover {
    stroke-width: 2.5;
    transform: scale(1.1);
    color: #000000;
  }
`;

export const SocialLinks: React.FC = () => {
  return (
    <>
      <a href={TWITTER_LINK} target="_blank">
        <StyledTwitterIcon className="cursor-pointer" />
      </a>
      <a href={LINKEDIN_LINK} target="_blank">
        <StyledLinkedinIcon className="cursor-pointer" />
      </a>
      <a href={GITHUB_LINK} target="_blank">
        <StyledGithubIcon className="cursor-pointer" />
      </a>
      <a href={CALENDLY_LINK} target="_blank">
        <StyledCalendarIcon className="cursor-pointer" />
      </a>
    </>
  );
};
