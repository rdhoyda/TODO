import { useState } from "react";
import CreatePost from "./CreatePost";
import UserBar from "./Userbar";
import PostList from "./PostList";

function App(){

const [user, setUser] = useState("");
const initialPosts= [
  {title: "Concepts of Physics", description: "Laws of Motion", author:"Rohan Dhoyda"},
  {title: "Applied Mathematics", description: "Concepts of Discrete Mathematics", author:"Rohan Dhoyda"}
]
const [posts, setPosts] = useState(initialPosts);
const handleAddPost = (newPost) => {
  setPosts([newPost,...posts]);
};
return (
  <div>
  <UserBar user={user} setUser={setUser} />
  <CreatePost user={user} handleAddPost={handleAddPost}/>
  <PostList posts={posts} />
  </div>
  )

  }
  export default App;

