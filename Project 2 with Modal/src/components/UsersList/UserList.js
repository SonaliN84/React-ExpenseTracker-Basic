import './Userlist.css'
function UserList(props){

return (
<div >
<ul  className="container">
   
   {props.users.map(user=>
   ( <li key={user.id}>{user.name} ({user.age} years)</li>)
   )}
</ul>

</div>

);




}
export default UserList;