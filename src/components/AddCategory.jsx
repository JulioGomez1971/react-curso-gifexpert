import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    // const initValue ='Escriba...'
    const [inputValue,setinputValue] = useState('')
    
    const onInputChange = ({target}) => {
        // if( inputValue == initValue) target.value = //setinputValue('')
        // console.log(target.value + '-' + inputValue + '-' + initValue)
        // console.log(target.value)
        setinputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        // console.log(inputValue)
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setinputValue('')
    }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
    <input 
        type="text"
        placeholder="Buscar gifs"
        value ={inputValue}
        onChange={ onInputChange}
    />
    </form>
  )
}
