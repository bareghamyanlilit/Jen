"use client";
import { useRef, useEffect } from "react";

export function MusicPlayer({ isPlaying }) {
  const audioRef = useRef(null);

  // Երբ isPlaying prop-ը փոխվում է, audio-ն play/pause անում է
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {}); // autoplay restriction-ը catch անում ենք
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
      <audio ref={audioRef} src="/track1.mp3" />
  );
}
