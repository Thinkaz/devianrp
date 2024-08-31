"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(true);

    const handleAccept = () => {
        // Set a cookie to remember that the user has accepted the cookie policy
        document.cookie = "cookieConsent=true; max-age=31536000";
        setShowBanner(false);
    };

    useEffect(() => {
        // Check if the user has already accepted the cookie policy
        const cookieAccepted = document.cookie.includes("cookieConsent=true");
        setShowBanner(!cookieAccepted);
    }, []);

    if (!showBanner) {
        return null;
    }

    return (
        <div className=" fixed bottom-4 right-5 bg-slate-100 dark:bg-neutral-800 p-4 max-w-xs rounded-md z-20">
            <div className="w-full">
                <a className="text-sm tracking-wide">Salut toi</a>
                <h3 className=" font-space-grotesk font-semibold text-lg tracking-wide pb-3">
                    Nous sommes les cookies
                </h3>
                <p>
                    Nous utilisons les 🍪 pour une meilleure expérience <br />
                    (pour ne pas être déco à chaque fois 😉)
                </p>
                <div className="flex justify-end pt-3">
                    <button className=" font-semibold font-space-grotesk underline" onClick={handleAccept}>
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
