import BlogList from "./BlogLIst";
import useFetch from "./useFetch";
import axios from "axios";
import { useEffect } from "react";

// const Home = () => {

//------click event------

// const handleClick = (e) =>{
//     console.log("hello",e);
// }
// const handleClickAgain = (name,e) =>{
//     console.log("Hello " + name,e.target)

//-------using state hock-----------//

// const [name, setName] = useState('Barmola');
// const [age , setAge] = useState(30);

// const handleClick = ()=>{
//     setName('Tedi');
//     setAge(23);

{
  /* <p>{name} is {age} years old </p>
        <button onClick={handleClick}>Click Me</button> */
}
{
  /* <button onClick={(e)=> handleClickAgain("Tedi",e)}>Click Me Again</button>  */
}

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ]);
  // const [name,setName] = useState('mario');

  // const handleDelete = (id)=>{
  //     const newBlogs = blogs.filter(blog => blog.id !==id);
  //     setBlogs(newBlogs);

  /** this effect is fetching data  */

  useEffect(() => {
    fetchUserList();
  }, []);

  function fetchUserList() {
    // GET, POST , PUT , PATCH, DELETE
    // GET => GET DATA FROM SERVER FOR EG. USER LIST USER DATA
    // POST => WHEN YOU WANT TO SEND SOME DATA TO SERVER
    // PUT => {name:'Himanshu',age:23,id:2} put=> //api/2 {nameage}
    // PATCH => {age:23} => PATCH=> // api/2/ {age:25}
    // DELETE => DELETE => api/2/ age:null
    axios
      .get("http://localhost:8000/blogs?type=latest")
      .then((response) => {
        console.log("Response :", response);
        console.log("Data Response: ", response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === "mario")} title="Mario's Blogs" handleDelete={handleDelete} />
       <BlogList blogs={blogs.filter((blogs) => blogs.author === "yoshi")} title="Yoshi's blog" handleDelete={handleDelete} />
       <button onClick={()=> setName('Tedi')}>Change Name</button>
       <p>{ name }</p>      */}
    </div>
  );
};

export default Home;
