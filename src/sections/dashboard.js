/** @jsxRuntime classic */
/** @jsx jsx */
import { rgba } from 'polished';
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

import Message from 'components/icons/message';
import Configuration from 'components/icons/configuration';
import Interval from 'components/icons/interval';
import Demo from 'components/icons/demo';
import TabButton from 'components/tabs/tab-button';

import Gif1 from 'assets/gif/Gif-01.gif';
import Gif2 from 'assets/gif/Gif-02.gif';
import Gif3 from 'assets/gif/Gif-03.gif';
import Gif4 from 'assets/gif/Gif-04.gif';

const data = [
  {
    id: 1,
    title: 'Message generator',
    icon: <Message />,
    image: Gif1,
  },
  {
    id: 2,
    title: 'Configuration',
    icon: <Configuration />,
    image: Gif2,
  },
  {
    id: 3,
    title: 'Setting interval',
    icon: <Interval />,
    image: Gif3,
  },
  {
    id: 4,
    title: 'Demonstration',
    icon: <Demo />,
    image: Gif4,
  },
];

const Dashboard = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="WHATS THE FUNCTION"
          description="Let’s see how it works."
        />
        <Tabs sx={styles.dashboardTabs} animated={{ tabPane: true }}>
          {data.map((tab) => (
            <TabPane key={tab.id} tab={<TabButton tab={tab} />}>
              <Image src={tab.image} alt={tab.title} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: rgba('#7141F8', 0.03),
    pt: [8, null, null, 12],
    pb: [6, null, null, null, 12],
  },
  heading: {
    marginBottom: [6, null, null, 12],
    maxWidth: ['none', null, null, 565, null, 'none'],

    p: {
      color: rgba('#02073E', 0.7),
      maxWidth: 445,
      fontSize: '16px',
      fontWeight: 500,
    },
  },
  dashboardTabs: {
    border: 0,
    '.rc-tabs-nav-wrap': {
      justifyContent: 'center',
      marginBottom: 8,
      overflow: 'unset',
    },
    '.rc-tabs-ink-bar': {
      display: 'none',
    },
    '.rc-tabs-tabpane, .rc-tabs-tab-btn': {
      outline: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.rc-tabs-nav-list': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      flexWrap: ['wrap', null, null, 'unset'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      ':nth-of-type(1),:nth-of-type(2)': {
        mb: [4, null, null, 0],
      },
      ':nth-of-type(2)': {
        ml: [4, null, null, 0],
      },
      ':nth-of-type(4)': {
        ml: [2, null, null, 0],
      },
      '+ .rc-tabs-tab': {
        ml: [null, null, null, 4, 8],
      },
    },
    '.rc-tabs-tab-active': {
      backgroundColor: 'white',
      fontWeight: [400, null, null, 500],
      boxShadow: '0px 4px 6px rgba(125, 128, 170, 0.08)',
      borderRadius: 5,
      padding: ['10px 10px', null, null, '10px 18px'],
    },
    '.rc-tabs-content-animated': {
        marginLeft: '0% !important',
    },
  },
};
