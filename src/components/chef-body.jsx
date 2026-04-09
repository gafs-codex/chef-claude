// import { useState } from "react";
import { useState } from "react";
import ClaudeRecipe from "./claudeRecipe";
import IngredientList from "./ingredientList";

function ChefBody() {
    const [ingredients, setIngredients] = useState([]);

    //  moved to the ingredientList component >>
    // const ingre = ingredients.map((items) => {
    //     return <li className="list" key={items} >{items}</li>
    // });



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

    const [recipeShow, setRecipeShown] = useState(false)

    function handleRecipeBtn() {
        setRecipeShown((prev) => {
            return !prev
        })
    }
    // console.log(recipeShow);

    return (
        <main>
            <form action={submitAction} className="input-field">
                <input type="text" placeholder="e.g. oregano" name="ingredients" />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientList
                    toggle={handleRecipeBtn}
                    ingredients={ingredients}
                />}

            {recipeShow && <ClaudeRecipe />}
        </main>
    )
}
export default ChefBody;