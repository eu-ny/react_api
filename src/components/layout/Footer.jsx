import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__inner">
                <div>
                    <h3>email</h3>
                    <a href="mailto:praise1109@gmail.com">praise1109@gmail.com</a>
                </div>
                <div>
                    <h3>HELLO</h3>
                    <a href="/">EUN-NY</a>
                </div>
                <div>
                    <h3>SOCIAL</h3>
                    <ul>
                        <li>
                            <a href="/">Youtube</a>
                        </li>
                        <li>
                            <a href="/">Instargram</a>
                        </li>
                        <li>
                            <a href="/">Github</a>
                        </li>
                        <li>
                            <a href="/">Tistory</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
