import { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { PostThought } from "./Components/PostThought/PostThought";
import { MessageList } from "./Components/MessageList/MessageList";
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    // Setting `loading` state to `true` to indicate data fetching is in progress
    setLoading(true);
    // Making a GET request to the API endpoint
    fetch("https://happy-thoughts-api-k50a.onrender.com/thoughts")
      // Parsing the response as JSON
      .then((res) => res.json())
      // Updating `messageList` state with the parsed data
      .then((data) => setMessageList(data))
      // Logging any errors that occur during the fetch operation
      .catch((error) => console.error(error))
      // Setting `loading` state to `false` once data fetching is complete
      .finally(() => setLoading(false));
  };
  return (
    <div className="main-wrapper">
      <Header />
      <PostThought fetchPosts={fetchPosts} />
      <MessageList messageList={messageList} fetchPosts={fetchPosts} />
      <Footer />
    </div>
  );
};
