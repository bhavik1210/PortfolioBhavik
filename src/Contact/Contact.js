import conatctimg from "../image/contact1.png"
import './Contact.css'

function Contact(){
    return(
        <div className="contact" id="contact">
            <h2 className="heading"><i class="fas fa-headset"></i> Get in <span>Touch</span></h2>

            <div className="container">
    <div className="content">
      <div className="image-box">
        <img  src={conatctimg} alt="" />
      </div>
    <form id="contact-form">
      
      <div className="form-group">
        <div className="field">
          <input type="text" name="name" placeholder="Name"  required />
          <i class='fas fa-user'></i>
        </div>
        <div className="field">
          <input type="text" name="email" placeholder="Email"  required />
          <i class='fas fa-envelope'></i>
        </div>
        <div className="field">
          <input type="text" name="phone" placeholder="Phone" />
          <i class='fas fa-phone-alt'></i>
        </div>
        <div className="message">
        <textarea placeholder="Message" name="message"  required ></textarea>
        <i class="fas fa-comment-dots"></i>
        </div>
        </div>
      <div className="button-area">
        <button type="submit">
          Submit <i class="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
        </div>
    )
}

export default Contact