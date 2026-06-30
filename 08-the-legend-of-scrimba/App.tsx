import React from "react"
import TopSection from "./components/TopSection"
import BottomSection from "./components/BottomSection"

export default function App() {
	const [playerName, setPlayerName] = React.useState<string>("")
	const [submitted, setSubmitted] = React.useState<boolean>(false)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setSubmitted(true)
		setPlayerName((prevName) => prevName.trim() + " The Magnificent!")
	}
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPlayerName(e.target.value)
	}

/* Challenge

	The hero of this RPG needs a name! Your task is to set up an input element as follows:
	
		1. The input should be in the space marked below and have the following characteristics: 
	  	    - Class name: "name-input"	
	  	    - Type: "text."
	  	    - Maximum length: 16 characters.
	  	    - Placeholder text: "Enter Your Character's Name".
	  	    - Required: yes  
	  	    - Disabled: yes if form has been submitted (see code on lines 7-11). 
	  
		2. The current value of playerName should be the current string the user has typed into the 
		   input. Whenever the user's input changes, the state should be updated.
		
		3. The input should be controlled. Its value should be controlled by the playerName state.
	
		4. You should only write your code below. Nothing needs to be changed or added elsewhere!   
		   If you complete these tasks correctly, you should receive a hero's name after you type 
		   in your character's name and click "Continue"!
*/

	return (
		<form className="form" onSubmit={handleSubmit}>
			<TopSection submitted={submitted} />
{
/* 아래 input 해설: 
1. 사용자 타이핑 ➔ 키보드 입력 발생
2. onChange={handleChange} ➔ 이벤트 감지 및 함수 실행
3. setPlayerName(e.target.value) ➔ React State(상태) 변경
4. value={playerName} ➔ 변경된 State가 다시 입력창 UI에 반영됨 (화면에 글자가 나타남)
5. onSubmit (Submit 버튼 클릭) ➔ 최종적으로 State에 저장되어 있던 playerName 값이 폼의 최종 데이터로 제출됨 */}
			
			{/*-----Your input below!----------*/}
			<input
			className="name-input"
			type="text"
			required
			maxLength={16}
			placeholder="Enter Your Character's Name"
			disabled={submitted}
			value={playerName}
			onChange={handleChange}
			
			

			/>
			{/*-----Your input above!----------*/}

			<BottomSection submitted={submitted} playerName={playerName} />
		</form>
	)
}
