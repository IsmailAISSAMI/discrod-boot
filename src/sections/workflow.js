/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text, Image } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.png";
import ArrowEven from "assets/arrowEven.png";

import StepOne from "assets/workflow/01.gif";
import StepTwo from "assets/workflow/02.gif";
import StepThree from "assets/workflow/03.gif";
import StepFour from "assets/workflow/04.gif";

const data = [
  {
    id: 1,
    title: "Set disbursement Instructions",
    text: "Generate the message code by visiting our format generator link, then putting the conversation you wish to have with the bot.",
  },
  {
    id: 2,
    title: "Assembly retrieves funds from your account",
    text: "Insert the account name, login and password, click remember to save the your logins. Next place the discord channel link you wish to talk in, next past the message code generated from the last step and click run.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    text: "In the setting you can change the intervals between each message as well as the intervals between the questions and responds (in seconds), you can also track the message already send and last message ID.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    text: "After clicking run the program open the discord account end start sending messages.",
  },
];

export default function WorkFlow() {

  const handleImage = (index) =>{
    switch (index) {
      case 1:
        return StepOne;
      case 2:
        return StepTwo;
      case 3:
        return StepThree;
      case 4:
        return StepFour;
      default:
        console.log(`Sorry, we are out of ${index}.`);
    }
  }

  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Let’s see how it works"
          isWhite={true}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                {/* <Heading sx={styles.wrapper.title}>{item.title}</Heading> */}
                {/* <img
                  src={handleImage(item.id)}
                  alt={`Step-0${item.id} image`}
                /> */}
                <Image src={handleImage(item.id)} variant="stepsImages" sx={styles.wrapper.imageStyle}/>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      background:
        "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 50px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      opacity: 0.3,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },
    imageStyle: {
      width: ["100%", "90%", "100%"],
      height: ["200px", "300px"],
    },
    subTitle: {
      paddingTop: "16px",
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
  },
};
