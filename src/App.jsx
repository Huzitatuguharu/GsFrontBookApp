import React from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import { ChakraProvider } from "@chakra-ui/react"
import { Box ,Tabs,TabList,Tab,TabPanel,TabPanels,Button} from "@chakra-ui/react"

import { Booklist } from "./components/Booklist";




const App = () => {

const getDataFromAPI = async (keyword) => {
const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
const result = await axios.get(`${requestUrl}${keyword}`);
return result;
};

  const onClickGet = async () => {
const requesturl2 = "http://api.aviationstack.com/v1/airplanes?access_key="

const result2 = await axios.get(`${requesturl2}process.env.AV_APP_ID`);
console.log(result2);
};



  // const url = "http://api.aviationstack.com/v1/airplanes?access_key="+process.env.AV_APP_ID;

  // const  = async() => {
  //   axios
  //     .get(url)
  //     .then(res => console.log(res))
  //     .catch(err => alert(err));
  // };






  const languages = ["React", "Vue", "Angular"];

return (
<BrowserRouter>
  <ChakraProvider>
    <Box margin={{ base: 5, md: 6 }} >
<Button onClick={onClickGet}>get</Button>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>
            <Link to="/">React</Link>
          </Tab>
          <Tab>
            <Link to="/vue">Vue</Link>
          </Tab>
          <Tab>
            <Link to="/angular">Angular</Link>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Route exact path="/" render={(props)=>
              <Booklist language={languages[0]} getData={getDataFromAPI} />}
              />
          </TabPanel>
          <TabPanel>
            <Route path="/vue" render={(props)=>
              <Booklist language={languages[1]} getData={getDataFromAPI} />}
              />
          </TabPanel>
          <TabPanel>
            <Route path="/angular" render={(props)=>
              <Booklist language={languages[2]} getData={getDataFromAPI} />}
              />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>


    {/*
    <h1>react app</h1>
    <ul>
      <li>
        <Link to="/">React</Link>
      </li>
      <li>
        <Link to="/vue">Vue</Link>
      </li>
      <li>
        <Link to="/angular">Angular</Link>
      </li>
    </ul>
    <Route exact path="/" render={(props)=>
      <Booklist language={languages[0]} getData={getDataFromAPI} />}
      />
      <Route path="/vue" render={(props)=>
        <Booklist language={languages[1]} getData={getDataFromAPI} />}
        />
        <Route path="/angular" render={(props)=>
          <Booklist language={languages[2]} getData={getDataFromAPI} />}
          /> */}

  </ChakraProvider>
</BrowserRouter>
);
}

export default App;
