// import { useState } from "react";
import React, { useState } from "react";

function ChefBody() {
    const [ingredients, setIngredients] = useState([]);
    const ingre = ingredients.map((items) => {
        return <li key={items} >{items}</li>
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
            <ul>
                {ingre}
            </ul>
        </main>
    )
}
export default ChefBody;