export default function Main() {
  const ingredients = ["chicken", "Oregamo", "Tomatoes",];
  function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredients = formData.get("Ingredients");
    ingredients.push(newIngredients);

    console.log(ingredients);
  }

  return (
    <main>
      <div className="form__container">
        <form className="input__form" onSubmit={submitForm}>
          <input
            className="input__text"
            type=""
            placeholder="e.g oregamo"
            aria-label="Add ingredients"
            name="Ingredients"
          />
          <button className="input__btn"> + Add ingredients</button>
        </form>
        <h3 className="list__header">Ingredients on hand:</h3>
        <ul className="input__list">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
