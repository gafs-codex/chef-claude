function Jokes(joke) {
    console.log(joke);

    return (

        // <div className="jokes">
        <section className="joke-card">
            <div className="card-info">
                <h4>{joke.setup}</h4>
                <p>{joke.punchline}</p>
            </div>
        </section>
        // <section className="joke-card">
        //     <div className="card-info">
        //         <h4>I got my daughter a fridge for her birthday.</h4>
        //         <p>I can't wait to see her face light up when she opens it.</p>
        //     </div>
        // </section>
        // <section className="joke-card">
        //     <div className="card-info">
        //         <h4>I got my daughter a fridge for her birthday.</h4>
        //         <p>I can't wait to see her face light up when she opens it.</p>
        //     </div>
        // </section>
        // <section className="joke-card">
        //     <div className="card-info">
        //         <h4>I got my daughter a fridge for her birthday.</h4>
        //         <p>I can't wait to see her face light up when she opens it.</p>
        //     </div>
        // </section>

    )
}
export default Jokes;