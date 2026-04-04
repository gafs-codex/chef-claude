// import { useState } from "react";
import React, { useState } from "react";

function ChefBody() {
    const [ingredients, setIngredients] = useState([]);
    const ingre = ingredients.map((items) => {
        return <li className="list" key={items} >{items}</li>
    });
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get("ingredients")
    //     setIngredients((prev) => {
    //         return [...prev, newIngredient]
    //     })
    // }

    function submitAction(formData) {
        const newIngredient = formData.get("ingredients");
        setIngredients((prev) => {
            return [...prev, newIngredient]
        })
    }
    return (
        <main>
            <form action={submitAction} className="input-field">
                <input type="text" placeholder="e.g. oregano" name="ingredients" />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section className="sec">
                <div className="list-container">
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        {ingre}
                    </ul>
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>
                </div>
            </section>}
        </main>
    )
}
export default ChefBody;