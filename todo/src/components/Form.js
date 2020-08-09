import React from "react"


export default function Form ({update, submit, value}) {

    const onChange = (event) => {
        const {value} = event.target
        update(value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        submit()
    }
return (
   <form onSubmit={onSubmit}>
       <label htmlFor="text">
           <input
            type="text"
            name="text"
            id="text"
            value={value}
            onChange={onChange}
            />
       </label>
       <button>Add</button>
   </form>
)

}

