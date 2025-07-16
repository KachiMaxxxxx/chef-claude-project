import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [addIngredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function submitForm(formData) {
    const id = crypto.randomUUID();
    const newIngredients = formData.get("Ingredients").trim();
   

    if (newIngredients) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { id, name: newIngredients },
      ]);
    }
  }

  

  function handleSwitch() {
    setRecipeShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <div className="form__container">
        <form className="input__form" action={submitForm}>
          <input
            className="input__text"
            type="text"
            placeholder="e.g oregamo"
            aria-label="Add ingredients"
            name="Ingredients"
          />
          <button className="input__btn"> + Add ingredients</button>
        </form>
        <IngredientsList
          addIngredients={addIngredients}
          handleSwitch={handleSwitch}
        />
        <ClaudeRecipe recipeShown={recipeShown} />
      </div>
    </main>
  );
}
