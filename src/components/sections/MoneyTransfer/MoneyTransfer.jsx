import React, { useEffect } from 'react'
import LinkButton from '../../elements/LinkButton'
import "./MoneyTranfer.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const MoneyTransfer = () => {
    useEffect (() => {
        AOS.init({
            duration: 1200, 
            once: false, 
            mirror: true, 
            delay: 100
        });
    }, []);
    return (
        <section id="money-transfer">
            <div class="container">
                <div class="column left"data-aos="fade-right">
                    <div class="content">
                        <div class="section-title">
                            <h2>Make your money transfer simple and clear</h2>
                        </div>
                        <div class="section-body">
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>Banking transactions are free for you</li>
                                <li><i class="fa-regular fa-circle-check"></i>No monthly cash commission</li>
                                <li><i class="fa-regular fa-circle-check"></i>Manage payments and transactions online</li>
                            </ul>
                            <div className="learn-more-link">
                                <LinkButton to="/" color="purple" text="Learn more" icon="bi bi-arrow-right" iconAfter={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right"data-aos="fade-left">
                    <img src="/images/transfer-statisitcs.svg" alt="statistics" />
                </div>
            </div>
        </section>
    )
}

export default MoneyTransfer