import "./Contact.css";

const Contact = () => {
  return (
    <div class="contact_w3agile" id="contact">
            <div class="container wow fadeInUp animated animated">
                <h3 class="title-w3">Contact Us</h3>

                <form action="#" method="post">
                    <div className="input_form">
                    <input type="text" placeholder="Name" name="Name" required=""/>
                    <input type="email" placeholder="Email" name="Email" required=""/>
                    </div>
                    <textarea name="Message" placeholder="Message" required=""></textarea>
                    <div class="con-form text-center">
                        <input type="submit" value="Send"/>
                    </div>
                </form>

            </div>
        </div>
  )
}

export default Contact