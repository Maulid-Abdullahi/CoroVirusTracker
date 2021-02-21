import React from "react"

import "./Footer.scss"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-credit">
                    Data source from{" "}
                    <a
                        className="interactive"
                        href="#"
                        rel="noopener noreferrer"
                    >
                        www.worldometers.info
                    </a>{" "}
                    - made with{" "}
                    <span className="heart" role="img">
                        ❤
                    </span>{" "}
                    &{" "}
                    <div className="spinning">
                        <span className="react" role="img">
                            ⚛
                        </span>
                    </div>{" "}
                    by{" "}
                    <a
                        className="interactive"
                        href="https://github.com/Maulid-Abdullahi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Maulid
                    </a>{" "}
                </div>
            </footer>
        )
    }
}

export default Footer
