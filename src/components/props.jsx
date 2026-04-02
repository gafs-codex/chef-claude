function Props(props) {
    // console.log(props);
    return (
        // <div className="contacts">
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img className="phone-image"
                    src="/src/assets/phone.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img className="mail-image"
                    src="/src/assets/envelope.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>

        // <article className="contact-card">
        //     <img
        //         src="/src/assets/helen.jpg"
        //         alt="Photo of Fluffykins"
        //     />
        //     <h3>Fluffykins</h3>
        //     <div className="info-group">
        //         <img className="phone-image"
        //             src="/src/assets/phone.png"
        //             alt="phone icon"
        //         />
        //         <p>(212) 555-2345</p>
        //     </div>
        //     <div className="info-group">
        //         <img className="mail-image"
        //             src="/src/assets/envelope.png"
        //             alt="mail icon"
        //         />
        //         <p>fluff@me.com</p>
        //     </div>
        // </article>

        // <article className="contact-card">
        //     <img
        //         src="/src/assets/gruendercouch.jpg"
        //         alt="Photo of Felix"
        //     />
        //     <h3>Felix</h3>
        //     <div className="info-group">
        //         <img className="phone-image"
        //             src="/src/assets/phone.png"
        //             alt="phone icon"
        //         />
        //         <p>(212) 555-4567</p>
        //     </div>
        //     <div className="info-group">
        //         <img className="mail-image"
        //             src="/src/assets/envelope.png"
        //             alt="mail icon"
        //         />
        //         <p>thecat@hotmail.com</p>
        //     </div>
        // </article>

        // <article className="contact-card">
        //     <img
        //         src="/src/assets/jacloud.jpg"
        //         alt="Photo of Pumpkin"
        //     />
        //     <h3>Pumpkin</h3>
        //     <div className="info-group">
        //         <img className="phone-image"
        //             src="/src/assets/phone.png"
        //             alt="phone icon"
        //         />
        //         <p>(0800) CAT KING</p>
        //     </div>
        //     <div className="info-group">
        //         <img className="mail-image"
        //             src="/src/assets/envelope.png"
        //             alt="mail icon"
        //         />
        //         <p>pumpkin@scrimba.com</p>
        //     </div>
        // </article>

    )
}
export default Props;