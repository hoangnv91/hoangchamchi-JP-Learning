'use client';


import React from 'react';
//import AudioRecorder from '../components/AudioRecorder';

const RecordPage = () => {
  return (
    <div>
      <h1>Ghi âm giọng nói của bạn</h1>
      <AudioRecorder />
    </div>
  );
};

export default RecordPage;
















// ------------------------------------------- //
// works amazingly well, it is amazing

//import React, { useState, useEffect, useRef } from 'react';


import { useState, useEffect, useRef } from 'react';


const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [error, setError] = useState(null);
  const audioChunks = useRef([]);

  useEffect(() => {
    // Ask for microphone permission and set up the MediaRecorder
    const getMicrophone = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
          audioChunks.current = []; // Reset audio chunks
        };

        setMediaRecorder(recorder);
      } catch (err) {
        setError('Không thể truy cập micrô.');
      }
    };

    getMicrophone();
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      setIsRecording(true);
      mediaRecorder.start();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      setIsRecording(false);
      mediaRecorder.stop();
    }
  };

  return (
    <div>
      <h2>Máy ghi âm</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={startRecording} disabled={isRecording || !mediaRecorder}>
        Bắt đầu ghi âm
      </button>
      <button onClick={stopRecording} disabled={!isRecording || !mediaRecorder}>
        Dừng ghi âm
      </button>

      {audioURL && (
        <div>
          <h3>Âm thanh đã ghi</h3>
          <audio controls src={audioURL}></audio>
        </div>
      )}
    </div>
  );
};

//export default AudioRecorder;
