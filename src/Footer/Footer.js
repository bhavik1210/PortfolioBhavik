import './Footer.css'
function Footer(){
    return(
        <div className="footer">
            <div className="box-container">

            <div className="box">
                <h3>Bhavik's Portfolio</h3>
                <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
            </div>

            <div className="box">
                <h3>quick links</h3>
                <a href="#home"><i class="fas fa-chevron-circle-right"></i> home</a>
                <a href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
                <a href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
                <a href="#education"><i class="fas fa-chevron-circle-right"></i> education</a>
                <a href="#work"><i class="fas fa-chevron-circle-right"></i> work</a>
                <a href="#experience"><i class="fas fa-chevron-circle-right"></i> experience</a>
            </div>

            <div className="box">
                <h3>contact info</h3>
                <p> <i class="fas fa-phone"></i>+91 XXX-XXX-XXXX</p>
                <p> <i class="fas fa-envelope"></i>Bhavikphatak12@gmail.com</p>
                <p> <i class="fas fa-map-marked-alt"></i>Mumbai, India-400053</p>
                <div className="share">

                    <a href="" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
                    <a href="" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
                    <a href="mailto:bhavikphatak12@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
                    <a href="" class="fab fa-twitter" aria-label="Twitter" target="_blank"></a>
                    <a href="" class="fab fa-telegram-plane" aria-label="Telegram" target="_blank"></a>
                </div>
            </div>
            </div>

            <h1 className="credit">Designed with <i class="fa fa-heart pulse"></i> by <a href=""> Bhavik Phatak</a></h1>

             </div>
    )
}

export default Footer