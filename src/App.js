import { useState, useEffect } from "react";

//assigning url link to url constant
const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  //assigning a null array  to user
  const [user, setUser] = useState([]);  

  //fetching the data using Async await
  async function getData() {
  const response = await fetch(url);
  const userData = await response.json();
  setUser(userData);
  console.log(userData);
};
  //rendering getData() function only one time while page reloading
  useEffect(() => {
    getData();
  }, []);

  //returning components
  return (
    <>
    {/* using map function loop through all values that are stored in user that assigned from url json */}
      {user.map((i)=>{
        return (
     <div className="user-data">
        <h2 key={i.id}>Name: {i.name}</h2>
        <p> User Name: {i.username}</p>
        <p>Email: {i.email}</p>
        <p>Website: {i.website}</p>

     </div>
        )
      })}
    </>
  );
}
export default App;
