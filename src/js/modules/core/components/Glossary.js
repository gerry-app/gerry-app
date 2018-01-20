import React from "react";
import injectSheet from "react-jss";

const styles = {
  term: {
    "& b": {
      fontFamily: "Super Grotesk",
    },
    "& p": {
      marginBottom: "1em",
    }
  }
};

const Glossary = ({ classes }) => {
  return (
    <div>
      <div className={classes.term}>
        <b>Compactness</b>
        <p>Refers to extent to which a district's geography is dispersed around its center. Districts should not be too diffuse (i.e., extend too far from the center of the district).</p>
      </div>
      <div className={classes.term}>
      <b>Contiguity</b>
      <p>A requirement mandating that a district be in one piece (e.g. a district cannot have an "island" floating in another district).</p>
      </div>
      <div className={classes.term}>
      <b>Community of Interest</b>
      <p>A term sometimes used to describe a grouping of people, such as in a specific region or neighborhood, that have common political, social, or economic interests.</p>
      </div>
      <div className={classes.term}>
      <b>Gerrymander(ing)</b>
      <p>Gerrymandering refers to the intentional manipulation of district boundaries for individual or partisan gain. The term was coined in reference to a plan signed by Elbridge Gerry (1744-1814), the governor of Massachusetts from 1810 to 1812. A partisan gerrymander occurs when a majority party draws district lines in a manner that intentionally prevents the election and reelection of candidates from the other party, thereby giving a disproportionate advantage to one political party at the expense of the other. A bipartisan gerrymander occurs when the two major parties mutually agree to preserve or increase the safety of their representatives' seats by creating safe-districts packed with commanding majorities of a single party.</p>
      </div>
      <div className={classes.term}>
      <b>Minority Vote Dilution</b>
      <p>The creation of districts that either (1) divide members of a racial or ethnic minority group among several districts, artificially reducing the group's opportunity to influence elections (see "Fragmentation") or (2) place high percentages of members of a racial or ethnic minority group in one or more districts so that minority voting strength is artificially limited to those districts and is minimized in neighboring districts (see "Packing").</p>
      </div>
      <div className={classes.term}>
      <b>One person, one vote</b>
      <p>The principle that each person's vote should count the same as every other person's vote; it is achieved by the allocation of the same or substantially the same population to each district of a particular type, such as a congressional district. The courts derive the one-person, one-vote standard primarily from the Equal Protection Clause of the Fourteenth Amendment to the U.S. Constitution. For congressional districts, the one-person, one-vote requirement also derives from Section 2, Article I, and from Section 2 of the Fourteenth Amendment to the The principle that each person's vote should count the same as every other person's vote; it is achieved by the allocation of the same or substantially the same population to each district of a particular type, such as a congressional district. The courts derive the one-person, one-vote standard primarily from the Equal Protection Clause of the Fourteenth Amendment to the U.S. Constitution. For congressional districts, the one-person, one-vot</p>
      </div>
      <div className={classes.term}>
        <b>Racially Polarized Voting</b>
        <p>The term used to describe circumstances in which the voting preferences of a racial or ethnic group consistently vary from those of other racial or ethnic groups, particularly when the different voting preferences are based on the race of the candidate. Also referred to as "racial bloc voting" or RBV.</p>
      </div>
      <div className={classes.term}>
        <b>Redistricting</b>
        <p>Redistricting is the redrawing or adjusting of electoral district boundaries every ten years to account for population shifts and growth during the previous decade.</p>
      </div>
      <div className={classes.term}>
        <b>Retrogression</b>
        <p>The term used to describe a reduction in the voting strength of a racial or ethnic group resulting from a redistricting plan or other change in election procedures. Retrogression is the primary test used for evaluating a change in election procedures for preclearance under Section 5 of the Voting Rights Act.</p>
      </div>
      <div className={classes.term}>
        <b>Single-Member District</b>
        <p>A District that elects only one representative.</p>
      </div>
      <div className={classes.term}>
        <b>Traditional Districting Principles</b>
        <p>A term often used to refer to criteria, such as compactness and contiguity, that have historically been considered in drawing legislative or other districts.</p>
      </div>
      <div className={classes.term}>
        <b>Undercount</b>
        <p>The error in census data that results from the failure to count some persons or housing units in the decennial census. Historically, certain groups, such as members of racial or ethnic minorities, have been disproportionately undercounted by the federal census.</p>
      </div>
      <div className={classes.term}>
        <b>Voting Age Population (VAP)</b>
        <p>The number of persons in a geographic unit who are at least 18 years of age. Because some population groups, such as racial or ethnic minorities, tend to be younger on average than the population as a whole, the voting age populations are frequently compared in evaluating the potential voting strength of those groups.</p>
      </div>
      <div className={classes.term}>
        <b>Voting Rights Act</b>
        <p>The Voting Rights was passed by Congress in 1965. It protects every American against racial discrimination in voting and is not limited to discrimination that literally excludes minority voters from the polls. It stands for the principle that everyone's vote is equal, and that neither race nor language should shut any of us out of the political process.</p>
      </div>  
    </div>
  );
};

export default injectSheet(styles)(Glossary);