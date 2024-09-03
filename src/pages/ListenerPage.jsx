import React, { useEffect, useRef } from "react";

export const BACKEND_SITE_URL =
  import.meta.env.VITE_BACKEND_URL || `ws://172.20.202.7:3030`;

  const ListenerPage = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(BACKEND_SITE_URL);
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(new MediaStream());

    ws.onmessage = (event) => {
      const audioBlob = new Blob([event.data], { type: "audio/webm" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioElement = audioRef.current;
      audioElement.src = audioUrl;
      audioElement.play();
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Audio ListenerPage</h1>
      <audio ref={audioRef} controls autoPlay />
    </div>
  );
};

export default ListenerPage;
