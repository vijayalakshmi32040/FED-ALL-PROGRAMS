function App(){
   return(
<div>
    <Student name="vijju" />
     <Student name="raki" />
 </div>
   );
}
 function Student(props){
return <h2>Hello, {props.name}!</h2>;
}
 export default App;