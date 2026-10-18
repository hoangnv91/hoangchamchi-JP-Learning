'use client';

// pages/index.js
import { useState } from 'react';

export default function Audio() {
    const [audioSrc, setAudioSrc] = useState('');

    const handlePlay = (filename) => {
        setAudioSrc(`/api/audio/${filename}`);
    };

    return (
        <div>
            <h1>Trình phát âm thanh</h1>
            <ul>
                {/* Replace these list items with the actual file names you have */}
                <li>
                    <button onClick={() => handlePlay('v_ボールペン.mp3')}>Phát v_ボールペン.mp3</button>
                </li>
                <li>
                    <button onClick={() => handlePlay('v_ホ短調.mp3')}>Phát v_ホ短調.mp3</button>
                </li>
                <li>
                    <button onClick={() => handlePlay('v_其れに.mp3')}>Phát v_其れに.mp3</button>
                </li>
            </ul>
            {audioSrc && (
                <audio controls>
                    <source src={audioSrc} type="audio/mpeg" />
                    Trình duyệt của bạn không hỗ trợ phát âm thanh.
                </audio>
            )}
        </div>
    );
}
