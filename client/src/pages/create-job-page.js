import { useState } from "react"

export default function CreateJobPage(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(title, description);
    }

    return (
        <div>
            <h1 className="title">Create job</h1>
            <div className="box">
                <form>
                    <div className="field">
                        <div className="label">Job title:</div>
                        <div className="control">
                            <input 
                            value={title} 
                            type="text" 
                            className="input" 
                            onChange={event => setTitle(event.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">Job description:</div>
                        <div className="control">
                            <textarea 
                            value={description} 
                            className="textarea" 
                            rows={10} 
                            onChange={event => setDescription(event.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button onClick={handleSubmit} className="button is-link">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}