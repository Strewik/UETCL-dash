import React, { Component } from 'react'
import uetcllogo2 from '../images/uetcllogo2.jpg'
import styles from './styles.module.css';


export class Header extends Component {
    render() {
        return (
            <div>
                <div className={styles.mainHeader}>
                <img src={uetcllogo2} alt={"logo"} />
                </div>
            </div>
        )
    }
}

export default Header
