function IngredientList(props) {
    const ingre = props.ingredients.map((items) => {
        return <li className="list" key={items} >{items}</li>
    });

    return (
        <section className="sec">
            <div className="list-container">
                <h2>Ingredients on hand:</h2>
                <ul>
                    {ingre}
                </ul>
                {props.ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggle}>Get a recipe</button>
                </div>}
            </div>
        </section>
    )
}
export default IngredientList; 