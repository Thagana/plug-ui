import React from 'react'
import styles from './Widget.style';

export default function Widget() {
    const [show, setShow] = React.useState(true);
    return (
        <div id="plug-ui-container" style={styles.container}>
                    <p id="plug-ui-text" style={styles.paragraph}>
                    By using our website, you agree to our 
                    <a href='http://plug-ui.io'> cookie policy</a>
                    </p>
                    <button style={styles.button} onClick={() => {
                        setShow(false);
                    }}>
                        &times;
                    </button>
        </div>
    )
}
