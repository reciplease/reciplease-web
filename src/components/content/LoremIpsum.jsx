import React from "react";
import {LoremIpsum} from 'react-lorem-ipsum';

export default ({paragraphs = 2}) => {
  return <LoremIpsum p={paragraphs}/>
}
