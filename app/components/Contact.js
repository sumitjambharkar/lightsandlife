import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact_form">
          <div className="input_width">
            <input type="text" />
            <input type="text" />
          </div>
          <div className="input_width">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input_width">
            <input type="submit" className="btn"/>
          </div>
         
        </div>
    </div>
  )
}

export default Contact