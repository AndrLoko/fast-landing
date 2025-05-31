import React from "react";
import scss from "./Contact.module.scss";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactForm: React.FC = () => {
  return (
    <div className={scss.contactInformation}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.listContent}>
            <div className={scss.listTitle}>
              <h1>Contact Information</h1>
              <p>Ready to scale your content?</p>
            </div>
            <div className={scss.listText}>
              <div>
                <BiSolidPhoneCall color="#fff" fontSize={18} />
                <p>+7 (999) 999-99-99</p>
              </div>
              <div>
                <MdEmail color="#fff" fontSize={18} />
                <p>hello@cutline.studio</p>
              </div>
              <div>
                <IoLocationSharp color="#fff" fontSize={18} />
                <p>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div className={scss.circleBox1}></div>
            <div className={scss.circleBox2}></div>
          </div>
          <div className={scss.listData}>
            <div className={scss.inputData}>
              <div>
                <p>First Name</p>
                <input type="text" />
              </div>
              <div>
                <p>Last Name</p>
                <input type="text" />
              </div>
            </div>
            <div className={scss.inputData}>
              <div>
                <p>Email</p>
                <input type="text" />
              </div>
              <div>
                <p>Link (video / channel /folder)</p>
                <input type="text" />
              </div>
            </div>
            <div className={scss.selectTarget}>
              <div className={scss.selectTitle}>
                <p>Select target:</p>
              </div>
              <div className={scss.selectData}>
                <div>
                  <input type="checkbox" />
                  <p>Youtube</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Ads</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>TikTok</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Instagram</p>
                </div>
              </div>
            </div>
            <div className={scss.message}>
              <p>Message</p>
              <input type="text" placeholder="Write your message.." />
            </div>
            <div className={scss.sendMessage}>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
