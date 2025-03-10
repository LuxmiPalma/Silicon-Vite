import React, { useEffect, useState } from 'react'
import "./HowDoesItWork.css";

const HowDoesItWork = () => {
    const [images, setImages] = useState([]);
    const [sectionContent, setSectionContent] = useState({
        heading: "Latest transaction history",
        text: "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum."
    });

    useEffect (() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                setImages ([
                    { id: 1, src: '/images/image-sliders/tablet-mobile1.svg', alt: 'Tablet slide 1'},
                    { id: 2, src: '/images/image-sliders/tablet-mobile2.svg', alt: 'Tablet slide 2'},
                   { id: 3, src: '/images/image-sliders/tablet-mobile3.svg', alt: 'Tablet slide 3'}
                  
                ]);
                setSectionContent({
                    heading: "Step 3. Transfers to people from your contact list",
                    text: "Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus."
                });
            } else {
                setImages([
                    { id: 1, src: '/images/image-sliders/iPhone 12 Pro.svg', alt: 'slide 1'},
                    { id: 2, src: '/images/image-sliders/iPhone 12 Pro2.svg', alt: 'slide 2'},
                    { id: 3, src: '/images/image-sliders/iPhone 12 Pro3.svg', alt: 'slide 3'}
                 ]);
                 setSectionContent({
                    heading: "Latest transaction history",
                    text: "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum."
                });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <section id="how-does-it-work">
            <div class="container">
                <div class="section-title">
                    <h2>How Does It Work?</h2>
                </div>
                
                <div class="image-slider">
                    {
                        images.map(image => (
                            <div key={image.id} class="image-slide">
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))
                    }
                </div>

                <div class="section-body">
                    <h3>{sectionContent.heading}</h3>
                    <p>{sectionContent.text}</p>
                </div>

            </div>
        </section>
    );
};



export default HowDoesItWork;