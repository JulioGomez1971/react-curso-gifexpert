import {useState} from 'react';
import { AddCategory,GifGrid } from './components'; // asume por defecto el index.js, no hay que explicitarlo
// import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {
const [categories, setCategories] = useState(['One Punch']);
const onAddCategory = (newCategory) => {

  //No agrega repetidos
  if (categories.includes(newCategory)) return 
  //una forma de hacerlo:
  // setCategories([inputValue,...categories ])
  // otra:
  // setCategories( cat => [...cat, 'Valorant'])
  setCategories([newCategory, ...categories])
  // console.log(newCategory)
}
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={(event) =>onAddCategory(event)}
        />
        
       
            {
                categories.map((category) =>  (
                  <GifGrid key ={category} category ={category}/>
                ))
              }
        
    </>
  )
}
