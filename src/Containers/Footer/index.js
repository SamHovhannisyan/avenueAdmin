import React from 'react';
import css from './footer.module.css';

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.ft}>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className={css.fr}>
                    <p>Copyright 2022© Datum All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;