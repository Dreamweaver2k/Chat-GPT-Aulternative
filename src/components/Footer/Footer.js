import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>Chat-GPT-Aulternative</h5>
            <p className={styles.description}>
              Premium Chat-GPT for high volume times.
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="https://chat.openai.com/chat" target="_blank">
                  Chat-GPT
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/Questions">
                  Chat-GPT-Aulternative
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;