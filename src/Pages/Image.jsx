import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import First from './First'
const Image = () => {
  return (
<Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Image</Tab>
    <Tab>Text</Tab>
    <Tab>Code</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <First/>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default Image