import React, { useContext } from 'react';
import { SubscribeContext } from '../../contexts/SubscribeContext';

const SubscribeForm = () => {
    const { formData, handleChange, handleSubmit, isSubmitting, message } = useContext(SubscribeContext);

    return (
        <div className="subscribe-form-container">
            <form onSubmit={handleSubmit} noValidate>
                <div className="subscribe-email">
                    <i className="fa-regular fa-envelope"></i>
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        disabled={isSubmitting}
                    />
                </div>

                <button className="btn btn-purple" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>

            {message && (
                <div className={`form-message ${message.type}`}>
                    {message.text}
                </div>
            )}
        </div>
    );
};

export default SubscribeForm;
