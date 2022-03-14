/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "I just paid where can I get the bot?",
    contents: (
      <div>
        Once the payment is confirmed you will receive an email with a download
        link, license key, and structures to help you start.
      </div>
    ),
  },
  {
    title: "How many users can I connect with at the same time?",
    contents: (
      <div>
        You can connect 2 users at the same time but you can launch 2 different
        conversations in 2 different channels with them, so you can grind in 2
        different projects at the same time.
      </div>
    ),
  },
  {
    title: `How much time do you think I need to guarantee a wl using the bot?`,
    contents: (
      <div>
        Between 2 and 5 days is more than enough to guarantee your wl, but make
        sure to set up a good long conversation, and change the channel from
        time to time.
      </div>
    ),
  },
  {
    title: `How much time should I put between messages?`,
    contents: (
      <div>
        An interval of 10 seconds is advised between the question/message of
        user 1 and the response of user 2 and an interval of 50 to 60 seconds is adv.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
