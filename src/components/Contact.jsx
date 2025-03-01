import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import confetti from 'canvas-confetti';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_vc3pfof', 'template_4ghtixc', formData, 'SYpPpvMiBB_1FNlMT')
            .then(() => {
                confetti();
                alert('Thank you for your message! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Oops! There was an error sending your message. Please try again later.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact">
            <h2 className="section-title">Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    );
};

export default Contact;