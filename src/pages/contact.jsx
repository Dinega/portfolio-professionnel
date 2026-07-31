function Contact() {
    return (
        <div>
            <h1>CONTACT</h1>
            <form>
                <label>Nom :</label>
                <input type="text" placeholder="votre nom" required/>
                <label>Email :</label>
                <input type="email" placeholder="votre email" reqired/>
                <label>Message :</label>
                <textarea placeholder="votre message"required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}
export default Contact;