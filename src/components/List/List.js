import React, { useState } from "react";
import ListItem from "./ListItem";
import ModelSelector from "./ModelSelector";
import Form from "./Form";
import WarningMessage from "../WarningMessage/WarningMessage";
import { ERROR_MESSAGE, ENDPOINT } from "../../constants";
import TokenChooser from "./TokenChooser"

require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);
var idNum = 0;
const List = () => {
  const [items, setItems] = useState([]);
  const [warningMessage, setWarningMessage] = useState({warningMessageOpen: false, warningMessageText: ""});
  const [selectedModel, setSelectedModel] = useState("davinci");
  const [numberOfTokens, setNumberOfTokens] = useState(1000)

  // const getItems = () => {
  //   // let promiseList = fetch(ENDPOINT.LIST)
  //   //   .then(response => {
  //   //     if (!response.ok) {
  //   //       throw Error(response.statusText);
  //   //     }
  //   //     return response.json();
  //   //   })
  //   // return promiseList;
  //   return [];
  // }

  function handleModelChange(model) {
    setSelectedModel(model);
  }
  function handleTokenChange(token){
    setNumberOfTokens(token);
  }

  const deleteItem = (item) => {
    console.log(item.text);
    // fetch(`${ENDPOINT.LIST}/${item.id}`, { method: "DELETE" })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then(result => {
    //     setItems(items.filter(item => item.id !== result.id));
    //   })
    //   .catch(error => {
    //     setWarningMessage({
    //       warningMessageOpen: true,
    //       warningMessageText: `${ERROR_MESSAGE.LIST_DELETE} ${error}`
    //     });
    //   });
  }

  const addItem = async (textField) => {
    // Warning Pop Up if the user submits an empty message
    console.log(selectedModel);
    if (!textField) {
      setWarningMessage({
        warningMessageOpen: true,
        warningMessageText: ERROR_MESSAGE.LIST_EMPTY_MESSAGE
      });
      return;
    }
    
    console.log('getting response');
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: textField,
      temperature: 0,
      max_tokens: numberOfTokens,
    });
    console.log(response.data.choices[0].text);
    var itemAdded = {id:idNum, text: textField,  response: response.data.choices[0].text}
    idNum++;
    setItems([itemAdded, ...items]);

    // setItems([items[0] +, ...items.slice(1,-1)]);
      
    // fetch(ENDPOINT.LIST, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     text: textField
    //   })
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then(itemAdded =>{
    //     setItems([itemAdded, ...items]);
    //   })
    //   .catch(error =>
    //     setWarningMessage({
    //       warningMessageOpen: true,
    //       warningMessageText: `${ERROR_MESSAGE.LIST_ADD} ${error}`
    //     })
    //   );
  };

  const closeWarningMessage = () => {
    setWarningMessage({
      warningMessageOpen: false,
      warningMessageText: ""
    });
  };

  // React.useEffect(() => {
  //   getItems()
  //     .then(list => {setItems(list)})
  //     .catch(error =>
  //       setWarningMessage({
  //         warningMessageOpen: true,
  //         warningMessageText: `${ERROR_MESSAGE.LIST_GET} ${error}`
  //       })
  //     );
  // }, []);

  return (
    <main id="mainContent" className="container">
      <div className="row justify-content-center py-5">
        <h3>Questions</h3>
      </div>
      <div className="row">
        <div className="col-12 p-0">
          <Form addItem={addItem}/>
        </div>
        
          <div style={{marginBottom: '20px'}}>
            <ModelSelector onModelChange={handleModelChange} />
            <TokenChooser handleChange={handleTokenChange} />
          </div>
        

        {items.map(listItem => (
          <ListItem
            key={listItem.id}
            item={listItem}
            deleteItem={deleteItem}
          />
        ))}
        <WarningMessage
          open={warningMessage.warningMessageOpen}
          text={warningMessage.warningMessageText}
          onWarningClose={closeWarningMessage}
        />
      </div>
    </main>
  );
}

export default List;