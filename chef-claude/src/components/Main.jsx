import { useState } from "react";
export default function Main() {
  const ingredients = [];
   
    const [addIngredients,setIngredients] = useState(ingredients);

  function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredients = formData.get("Ingredients");
   
    
    setIngredients ((prevIngredients)=>[...prevIngredients,newIngredients]);
      
  }

  return (
    <main>
      <div className="form__container">
        <form className="input__form" onSubmit={submitForm}>
          <input
            className="input__text"
            type="text"
            placeholder="e.g oregamo"
            aria-label="Add ingredients"
            name="Ingredients"
          />
          <button className="input__btn"> + Add ingredients</button>
        </form>
        <h3 className="list__header">Ingredients on hand:</h3>
        <ul className="input__list">
         {addIngredients.map((item,index)=>(<li key= {index}>{item}</li>))}
        </ul>
      </div>
    </main>
  );
}
