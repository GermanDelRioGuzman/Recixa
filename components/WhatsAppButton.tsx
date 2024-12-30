import React from "react"; 

const WhatsAppButton = () => {
    const phoneNumber = "523335461666"
    const message = "¡Hola! me gustaria mas informacion";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank");
    };

    return (
        <button 
            onClick={handleWhatsAppClick}
            style = {{
                backgroundColor : "#4b733e",
                color: "white",
                padding: "10px 20px",
                //buttonsize
                fontSize: "1rem",
                width: "80%",
                height: "50px",
                maxWidth: "300px",
                margin: "10px auto",
                
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
            >
                Enviar mensaje por WhatsApp
            </button>
        );
};

export default WhatsAppButton; 