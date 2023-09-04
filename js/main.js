   
   
   
   1.compare two strings vowel count of "Fabevy" , "Velmurugan".
     Which one is having large vowel count. (use call back function)?
	 
	 	function vowel(name){
		name=name.toLowerCase()
		let count=0;
		for(i=0;i<name.length;i++){
		if(name[i]==="a"||name[i]==="e"||name[i]==="i"||name[i]==="o"||name[i]==="u"){
			count++
		}
		}
		return count
	}
	
	function check(){
		
		let a=vowel("Fabevy");
		let b=vowel("sivapackia");
		
		if(a>b){
			console.log(`Fabevy vowel high count`)
		}
		else{
			console.log(`Sivapackia vowel high count`)
		}
	}
	check()
	 
	 
   2.let num =0;
		console.log(num++)
		console.log(num++)
		console.log(num++)
		
		answer:0,1,2
		
   3. var obj = {a:1};
		let emp = obj;
		obj=null;
		console.log(obj,emp)
		
		answer:null , {a:1}
		
   4.console.log(add());
		const add = () =>{
		return a+b;
		} 
		
		answer:ReferenceError: add is not defined
		
   5.function mul(c,d){
		return c*d
		}
		mul(8)
		
		answer:
		a) NaN
		b) correct ans:
                    function mul(c,d=1){
                    return c*d
                    }		
                    console.log(mul(8))
               
             c)Default Param
             d) correct ans:
                    function mul(c,d){
                    return c*d
                    }
                   let c = mul(3,2)					
                    console.log(c)
		
		
   6.let data = {name: "ES6"}

		function check(value){
		if(value===data){
		console.log("Both are same");
		}
		else {
		console.log("not same")
		}
		}
		check({name: "ES6"})
		
		
		answer:not same
		
   7.let emp = {name:"ES6"}
		emp.c = 25;
		emp.name = "React"
		console.log(emp)
		
		answer:{name: 'React', c: 25}
		
   8.How to avoid shallow copy? How many ways are there? Write example
      
	   => Using spread operator.
	   => Using Object.assign operator.
	   => Using JSON.stringify and JSON.parse.
	   
  9.[{name:"a" ,age:23},{name:"b" ,age:15},{name:"c" ,age:45},{name:"d" ,age:34}]
	  Sort an array in ascending order based on their age. 
	  
	  	Answer: let a=[{name:"a" ,age:23},{name:"b" ,age:15},{name:"c" ,age:45},{name:"d" ,age:34}]
				let b=a.sort((v,h)=>{
					return v.age-h.age
				})
				console.log(b)

		
  10.input : [
		{name: "Ganesh",position: "fresher"},
		{name: "Hariharan",position: "junior"},
		{name: "Samy",position: "senior"},
		{name: "Mari",position: "junior"}
		]
		output: ["Hariharan","Mari"]
		
		 Answer:let input = [
				{name: "Ganesh",position: "fresher"},
				{name: "Hariharan",position: "junior"},
				{name: "Samy",position: "senior"},
				{name: "Mari",position: "junior"}
				]
				let output=input.filter((v,i)=>{
					return v.position=="junior"?v.name:""
				})
				let result=output.map((v,i)=>{
					return v.position=="junior"?v.name:""
				})
                console.log(result)
		
		
		
  11.[{name:"a" ,age:23},{name:"b" ,age:15},{name:"c" ,age:45},{name:"d" ,age:34}]
		How to store this value in local storage? 
		
		
		Answer:let a= [{name:"a" ,age:23},{name:"b" ,age:15},{name:"c" ,age:45},{name:"d" ,age:34}]
					localStorage.setItem("localStorage",JSON.stringify(a))
		
		
		
  12. Write difference between map and filter.
      
	  Answer:
		map() Method
			map method is used to transform an array by applying a function to each element and creating
			a new array with the transformed values.
		filter() Method
			filter method is used to extract elements from an array based on a condition and create a new array containing 
			only the elements that satisfy that condition.
  
  13. Difference between props and state. 
  
      	Answer:
				PROPS                                                           STATE

			The Data is passed from one component to another.        	 The Data is passed within the component only.
			It is Immutable (cannot be modified).	                     It is Mutable ( can be modified).
			Props can be used with state and functional components.   	 The state can be used only with the state components/class component (Before 16.0).
			Props are read-only.	                                     The state is both read and write.

  
  
  14. Syntax and need of use param and useSearch param
	  
		   The useParams hook helps you extract the dynamic part attached to a
		   URL and returns an object of key/value pairs of the dynamic parameter in a URL.
		   const params = useParams()
			  
		useSearchParam syntax and purpose
		
		The useSearchParams hook provided by the React Router library
		helps you manage the information that's included in a URL after the "?" symbol
		
			 let navigate = useNavigate();
	         let [Params] = useSearchParams();

  
  
  15. Write flow of context . 
         
		 
		 Answer:
		
		
		step1:
		Context.js
		
		import React, { createContext } from "react";
		export const Context=createContext()
		
		step2:
		
		Reducer.js
		
		import React from "react";

			export const initialState={
				name:"Rspkannan",
				age:20
			   
			   }
			export const Reducer=(state,action)=>{

				if(action.type=="name"){
					return {...state,name:action.payload}
				}
			   }
			   
			step3:
			
			Router.js
			
			
				import React, { useReducer } from "react";
				import { BrowserRouter, Routes, Route } from "react-router-dom";
				import Home from "./Home"
				import { Context } from "./Context";
				import { Reducer, initialState } from "./Reducer";

				function Router(){ 
					const [state,dispatch]=useReducer(Reducer,initialState)
					console.log(state)
					return(
						<Context.Provider value={{state,dispatch}}>
						<BrowserRouter>
						<Routes>
							<Route  path="/" element={<Home/>}> 
								

							</Route>
						</Routes>
						</BrowserRouter>
						</Context.Provider>
					)

				}
				export default Router
				
				
		step4:
		
		Home.js
		
		import React, { useContext } from "react";
	import {Context} from './Context'

	export function Home(){

    const {state,dispatch}=useContext(Context)


    let  handle=()=>{
        dispatch({type:"name",payload:"sivapackia"})
        dispatch({type:"age",payload:25})
	}
        
	   return(
			<div>
				<button onClick={handle}>Click me</button>
			   <h1>{state.name}<h1>
		   </div>
		)

		
	}
	export default Home
  
  
  
  16. Function and class component difference.

				Answer:
			
			function component																	Class Component

			A functional component is just a plain JavaScript pure function 				A class component requires you to extend from React.
			that accepts props as an argument and returns a React element(JSX).				Component and create a render function that returns a React element.


				Example:																	constructor(props) {
																								super(props);
				const [name,SetName]= React.useState(' ')									this.state = {name: ' '}
																								}


				Constructors are not used.													  
		  
  
  17. How to create react project?
  
       Answer:npx react-create-app myproject
	