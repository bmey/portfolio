import React, { Component } from "react";
import Form from "./form";
import Headshot from "../../headshot";
import SocialMediaLink from "../../socialMediaLink";
import socialMediaLinks from "../../../constant/socialMedia";
import MdEmail from "react-icons/lib/md/email";
import { headshotSize } from "../../../constant/sizes";
import "./contact.css";

class Contact extends Component {
  render() {
    const headshotRadius = headshotSize / 2;

    return (
      <div className="text-center">
        <h1>Contact</h1>

        <div className="d-flex" style={{ margin: `${headshotRadius}rem 2rem` }}>
          <div className="contact-section form-section">
            <Headshot
              size={headshotSize}
              style={{ marginTop: `-${headshotRadius}rem` }}
            />
            <p style={{ margin: "2rem" }}>
              Lorem ipsum wouebnvowin evownbrv wermv.
            </p>
            <div style={{ margin: "1rem 2rem" }}>
              <Form />
            </div>
          </div>

          <div className="contact-section d-flex flex-column justify-content-around">
            <div>Lorem ipsum wouebnvowin evownbrv wermv.</div>

            <div>
              <div>Prefer to send an email?</div>
              <a
                href="mailto:bryan.j.mey+portfolio@gmail.com"
                className="d-flex align-items-center justify-content-center"
              >
                <MdEmail
                  size={20}
                  aria-hidden
                  style={{ marginRight: "0.25rem" }}
                />
                <span>bryan.j.mey@gmail.com</span>
              </a>
            </div>

            <div>
              <div>Follow me on social media</div>
              <div className="d-flex justify-content-center justify-items-center">
                {socialMediaLinks.map(handle => (
                  <SocialMediaLink
                    key={`${handle.title}-contact-page`}
                    size={40}
                    {...handle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
