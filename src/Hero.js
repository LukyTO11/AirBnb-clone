export default function Hero() {
    return (
        <section className="hero">
            <img src={require("./images/photo_grid.png")} className="hero-photo" alt="" />
            <h1 className="hero_header">Online Experiences</h1>
            <p className="hero_text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving
                home.
            </p>
        </section>
    )
}