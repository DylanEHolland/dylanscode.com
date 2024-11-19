import { AnimatedList } from "./AnimatedList";
import { AnimatedListItem } from "./AnimatedListItem";

export const PolitechAI = () => {
  return (
    <>
      At Politech I was part of the founding team where we set out to build a
      modern marketing suite utilizing the latest breakthroughs in AI. My part
      initially was as an engineer throwing together a proof of concept. Then I
      brought on an engineer to boost the daily productivity and overtime this
      became a team of 8 including a data scientist and domain expert.
      <div className="mt-4"></div>
      Some highlights from my time include:
      <div className="mt-4"></div>
      <AnimatedList>
        <AnimatedListItem>
          Architecting a backend capable of handling {">"}1 million users, each
          of which had dozens to hundreds of pages of data to account for
        </AnimatedListItem>
        <AnimatedListItem>
          Acting as principle engineer for all systems, setting code patterns
          and enforcing good habits on a team via code reviews
        </AnimatedListItem>
        <AnimatedListItem>
          Building the foundations for scrapers that pulled tens to hundreds of
          thousands of pages a week utilizing a tech stack made of selenium,
          typescript, python, postgres and redis{" "}
        </AnimatedListItem>
        <AnimatedListItem>
          Training and overseeing all new team members, as well as managing
          daily operations and interfacing with clients
        </AnimatedListItem>
      </AnimatedList>
    </>
  );
};

export const DigiBuild = () => {
  return (
    <>
      I started at digibuild as a full stack engineer working on a platform for
      supply chain procurement utilizing typescript with nextjs for the
      frontend, graphql and postgres on the backend and hyperledger for the
      blockchain.
      <div className="mt-4"></div>
      Some highlights from my time include:
      <div className="mt-4"></div>
      <AnimatedList>
        <AnimatedListItem>
          Enforcing code patterns between screens and pages to prevent constant
          bugs and allow for rapid progress to be made on building out multiple
          workflows alongside standardization of existing components and
          implementation of all new UI components as strictly typed react
          components
        </AnimatedListItem>
        <AnimatedListItem>
          Utilized react context and hooks to centralize a lot of state
          management, and added an ORM to allow for optimizing queries when
          needed + added redis which combined sped up the app by over 100x.
        </AnimatedListItem>
        <AnimatedListItem>
          Implemented backend worker to remove backend queries from the blocking
          the frontend entirely
        </AnimatedListItem>
        <AnimatedListItem>
          Worked closely with PM and COO to implement a large number of new
          frontend features once unblocked to help company secure its next round
          of funding.
        </AnimatedListItem>
        <AnimatedListItem>
          Instilled a team based culture of collaboration which allowed for
          junior engineers to get rapidly up to speed and contribute
          meaningfully.
        </AnimatedListItem>
        <AnimatedListItem>
          Added testing frameworks and QA practices which led to a large
          reduction in bugs and a large increase in confidence in the product.
        </AnimatedListItem>
      </AnimatedList>
    </>
  );
};

export const SouffleClub = () => {
  return (
    <>
      <div className="mt-4"></div>
      Some highlights from my time include:
      <div className="mt-4"></div>
    </>
  );
};

export const TrustedFor = () => {
  return (
    <>
      <div className="mt-4"></div>
      Some highlights from my time include:
      <div className="mt-4"></div>
    </>
  );
};

export const ATVsNetWeb = () => {
  return (
    <>
      <div className="mt-4"></div>
      Some highlights from my time include:
      <div className="mt-4"></div>
    </>
  );
};
