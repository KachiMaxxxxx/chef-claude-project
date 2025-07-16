export default function IngredientsList({addIngredients = [] , handleSwitch}) {
   if ( addIngredients.length === 0) return null; 
    return(
         <section>
            <h3 className="list__header">Ingredients on hand:</h3>
          <ul className="input__list" aria-live="polite">
            {addIngredients.map(({id,name}) => (
              <li key={id}>{name}</li>
            ))}
          </ul>

          { addIngredients.length > 3 ? <div className="recipe__container">
            <div className="recipe__text">
              <h3 className="recipe__header">Ready for a recipe? </h3>
              <p className="recipe__text">
                Generate a recipe from your list of ingredients
              </p>
            </div>
            <button  onClick={handleSwitch} className="recipe__button">Get a recipe</button>
          </div> : null}
        </section> 
    )

}