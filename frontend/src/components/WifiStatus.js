import React, { useEffect, useState } from 'react';
import { RiWifiLine, RiWifiOffFill } from 'react-icons/ri';


function WifiStatus() {
    const [status, setStatus] = useState('checking');

    const checkWifiStatus = async () => {
        try {
            const response = await fetch('http://localhost:5000/wifi-status'); // Adjust the URL if necessary
            if (response.ok) {
                const data = await response.json();
                setStatus(data.status);
            } else {
                setStatus('disconnected');
            }
        } catch (error) {
            setStatus('disconnected'); // Handle fetch errors
        }
    };

    useEffect(() => {
        checkWifiStatus();
        const interval = setInterval(checkWifiStatus, 5000); // Check every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            {status === 'connected' ? (
                <RiWifiLine size={30} color='#75bd43' />
            ) : (
                <RiWifiOffFill size={30} color='#75bd43' />
            )}
        </div>
    );
}

export default WifiStatus







