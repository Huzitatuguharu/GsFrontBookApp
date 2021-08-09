import React,{ useState, useEffect } from "react"; // 追加
import { ChakraProvider } from "@chakra-ui/react"
import {Spinner} from "@chakra-ui/react"


export const Booklist = ({ language, getData }) => {

 const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = getData?.(language)
      .then((response) => setBookData(response));
  }, [language, getData]);

  return (

   
      <ChakraProvider>
      {
        bookData === null
          ?
<Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
/>

          : bookData.data.items.map((x, index) => (<li key={index}>{x.volumeInfo.title}</li>))
      }

  </ChakraProvider>

  );
};
