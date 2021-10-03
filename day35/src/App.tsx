import React, {useEffect} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import updateUser from './actions';
import Landing from './components/Landing';

export interface PostType{
  username: string;
  post: string;
}
function App() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [posts, setPosts] = React.useState<PostType[]>([]);
  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/post.json")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
    })
  }, []);
  return (
    <div className="App">
     <Navbar/>
     <Landing posts = {posts}/>
    </div>
  );
}

export default App;
