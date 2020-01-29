import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends TabMenu {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab>Ankara Office</Tab>
          <Tab>Istanbul Office</Tab>
        </TabList>
        <TabPanel> <h2>Any content 1</h2>
      <p>
        <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
        game franchise, owned by Nintendo and created by Japanese video game designer
        Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
        of the series, Mario has appeared in over 200 video games since his creation.
        Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
        Kingdom, his adventures generally center upon rescuing Princess Peach from the
        Koopa villain Bowser. His younger brother and sidekick is Luigi.
      </p></TabPanel>
        <TabPanel><h2>Any content 2</h2>
      <p>
        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
        Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
      </p></TabPanel>
      </Tabs>
    );
  }
}