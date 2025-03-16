import React, { useEffect } from 'react'

import LinkButton from '../../elements/LinkButton'
import "./ReceivePayment.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReceivePayment = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          once: false, 
          mirror: true, 
          delay: 100 
        });
      }, []);

  return (
    <section id="receive-payment">
        <div className="container">
            <div className="column left"data-aos="flip-right">
                <img src="/images/receive-payment.svg" alt="payment" />
            </div>
            <div className="column right"data-aos="flip-left">
                <div className="content">
                    <div className="section-title" data-aos="flip-up">
                        <h2>Receive payment from international bank details</h2>
                    </div>
                    <div className="section-body">
                        <div className="features">
                            <div className="feature"data-aos="flip-down">
                                <div className="feature-icon">
                                    <img src="images/icons/credit-card.svg" alt="credit card" />
                                </div>
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>
                            <div className="feature"data-aos="flip-up">
                                <div className="feature-icon">
                                    <img src="images/icons/wallet.svg" alt="credit card" />
                                </div>
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>

                        <div className="learn-more-link"data-aos="zoom-in">
                            <LinkButton to="/" color="purple" text="Learn more" icon="bi bi-arrow-right" iconAfter={true} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ReceivePayment