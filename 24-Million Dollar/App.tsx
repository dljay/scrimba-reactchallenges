import React from "react"
import Message from "./components/Message"
import Header from "./components/Header"
import Footer from "./components/Footer"

interface UserInput {
	charOne: string
	charTwo: string
	charThree: string
	charFour: string
}

export default function App() {
	const passCode = "1001"

	const [userInput, setUserInput] = React.useState<UserInput>({
		charOne: "",
		charTwo: "",
		charThree: "",
		charFour: "",
	})

	const [verified, setVerified] = React.useState<boolean | undefined>(undefined)

	const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target
		
		setUserInput((prevVal)=> (
			{
				...prevVal,
				[name]: value
			}

		))
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault() // 브라우저 refresh 방지
		// 
		const userInputPin = Object.values(userInput).join("")
		setVerified(userInputPin === passCode)
	}
	console.log("userInput: ", userInput)

	

	/* Challengework

	The verification code form doesn't yet check the user's input. Your job is to finish setting it up as follows: 
	

		   
		2. When the user clicks the submit button, a submit handling function should prevent the 
		   page from refreshing and check if the combination of the four characters stored in userInput equals the passCode value (declared on line 7 above).
		   
		3. If they match, the verified state value should be set to true. Otherwise, it should 
		   be set to false. 
		   
		4. Your code should be as DRY as possible!
*/

	return (
		<div className="wrapper">
			<Header />

			<form onSubmit={handleSubmit}>
				<Message status={verified} />

				<div>
					<input required type="password" name="charOne" maxLength={1} value={userInput.charOne}  onChange={handleChange}/>

					<input required type="password" name="charTwo" maxLength={1} value={userInput.charTwo}  onChange={handleChange} />

					<input required type="password" name="charThree" maxLength={1} value={userInput.charThree}  onChange={handleChange} />

					<input required type="password" name="charFour" maxLength={1} value={userInput.charFour}onChange={handleChange} />
				</div>

				<button disabled={verified} >Submit</button>
			</form>

			<Footer />
		</div>
	)
}
