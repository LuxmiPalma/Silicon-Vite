import { useState, createContext } from "react"

export const SubscribeContext = createContext();

export const SubscribeProvider = ({ children }) => {
    const apiUrl = 'https://kyhn24.azurewebsites.net/api/subscribe'; // Add correct API URL

    const defaultValues = { email: '' };
    const [formData, setFormData] = useState(defaultValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    // Handles input changes
    const handleChange = (e) => {
        setFormData({ email: e.target.value });
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        // Simple validation
        if (!formData.email || !formData.email.includes('@')) {
            setMessage({ type: 'error', text: 'Please enter a valid email address' });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify({ email: formData.email })
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Thanks for subscribing!' });
                setFormData(defaultValues); // Reset form after successful submission
            } else {
                const errorData = await response.json().catch(() => ({}));
                setMessage({ type: 'error', text: errorData.message || 'Subscription failed. Please try again.' });
            }
        } catch (error) {
            console.error('Subscription error:', error);
            setMessage({ type: 'error', text: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SubscribeContext.Provider value={{ formData, handleChange, handleSubmit, isSubmitting, message }}>
            {children}
        </SubscribeContext.Provider>
    );
};
