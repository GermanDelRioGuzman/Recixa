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
                position:"fixed",
                bottom: "330px",
                right: "495px",
                color: "white",
                padding: "10px 20px",
                fontSize: "12px",
                width: "200px",
                height: "50px",
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