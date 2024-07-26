import React from 'react';
import TweetForm from '../components/TweetForm';
import TweetList from '../components/TweetList';
import ContentContainer from "../components/ContentContainer";
import Flex from "../components/FlexContainer";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
import ScrollableContainer from "../components/ScrollableContainer";

const Home: React.FC = () => {
  return (
      <Flex className="justify-center items-center">
          <ContentContainer>
              <SidebarContainer/>
          </ContentContainer>
          <ScrollableContainer>
                  <Flex className="flex-col">
                      <TweetForm/>
                      <TweetList/>
                  </Flex>
          </ScrollableContainer>
      </Flex>
  );
};

export default Home;
