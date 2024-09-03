// src/components/Broadcaster.js
import React from 'react';
import { BACKEND_SITE_URL } from './ListenerPage';

const BroadcasterPage = () => {
    const startBroadcasting = async () => {
        const ws = new WebSocket(BACKEND_SITE_URL);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    ws.send(event.data);
                }
            };

            mediaRecorder.start(100); // Send audio data every 100ms
            console.log('Broadcasting started.');
        } catch (err) {
            console.error('Failed to get audio stream:', err);
        }
    };

    return (
        <div>
            <h1>Audio Broadcaster</h1>
            <button onClick={startBroadcasting}>Start Broadcasting</button>
        </div>
    );
};

export default BroadcasterPage;
