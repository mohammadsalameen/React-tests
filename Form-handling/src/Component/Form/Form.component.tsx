import { useState } from 'react';
import './form.css'


const Form = () =>{
    const [name, setName] = useState("Mohamamd");
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleOnSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="username">Username</label>
                <input id='username' type="text" value={name} onChange={handleChange}/>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Form;