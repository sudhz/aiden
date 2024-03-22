
// import React, { useState, useRef } from 'react';

// function HomeApp() {
//   const [audioUrl, setAudioUrl] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedBlob, setRecordedBlob] = useState(null);
//   const mediaRecorderRef = useRef(null);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       mediaRecorderRef.current = new MediaRecorder(stream);
//       mediaRecorderRef.current.ondataavailable = (e) => {
//         setRecordedBlob(e.data);
//       };
//       mediaRecorderRef.current.start();
//       setIsRecording(true);
//     } catch (err) {
//       console.error('Could not start recording:', err);
//       setError('Could not start recording');
//     }
//   };

//   const stopRecording = () => {
//     mediaRecorderRef.current.stop();
//     setIsRecording(false);
//     // Close the stream to release the microphone
//     mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
//   };

//   const resetForm = () => {
//     setAudioUrl('');
//     setError('');
//     setLoading(false);
//     setIsRecording(false);
//     setRecordedBlob(null);
//     // If there's an active recording, stop it
//     if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
//       mediaRecorderRef.current.stop();
//       mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     let formData = new FormData();
    
//     if (recordedBlob) {
//       formData.append('audio', recordedBlob, 'recording.mp3');
//     } else {
//       formData = new FormData(event.target);
//     }

//     try {
//       const response = await fetch('http://localhost:8000/', {
//         method: 'POST',
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error('Failed to synthesize speech');
//       }

//       const blob = await response.blob();
//       setAudioUrl(URL.createObjectURL(blob));
//       setError('');
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to synthesize speech');
//       setAudioUrl('');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>AIDEN</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" name="audio" accept="audio/*" />
//         {isRecording ? (
//           <button type="button" onClick={stopRecording}>Stop Recording</button>
//         ) : (
//           <button type="button" onClick={startRecording}>Start Recording</button>
//         )}
//         <button type="submit">Submit</button>
//         <button type="button" onClick={resetForm} style={{ marginLeft: '10px' }}>Reset</button>
//       </form>
//       {loading && <div>Loading...</div>}
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       {audioUrl && (
//         <audio controls>
//           <source src={audioUrl} type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//     </div>
//   );
// }

// export default HomeApp;

import React, { useState, useRef } from 'react';
import { Container, Button, Box, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh';

const Input = styled('input')({
  display: 'none',
});

function HomeApp() {
  const [audioUrl, setAudioUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (e) => {
        setRecordedBlob(e.data);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Could not start recording:', err);
      setError('Could not start recording');
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
  };

  const resetForm = () => {
    setAudioUrl('');
    setError('');
    setLoading(false);
    setIsRecording(false);
    setRecordedBlob(null);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let formData = new FormData();
    
    if (recordedBlob) {
      formData.append('audio', recordedBlob, 'recording.mp3');
    } else {
      formData = new FormData(event.target);
    }

    try {
      const response = await fetch('http://localhost:8000/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to synthesize speech');
      }

      const blob = await response.blob();
      setAudioUrl(URL.createObjectURL(blob));
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to synthesize speech');
      setAudioUrl('');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #000033 0%, #333333 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom color="white" textAlign="center">
        AIDEN
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', mt: 2 }}>
          <label htmlFor="contained-button-file">
            <Input accept="audio/*" id="contained-button-file" multiple type="file" name="audio" style={{ display: 'none' }} />
            <IconButton color="secondary" component="span">
              <CloudUploadIcon />
            </IconButton>
          </label>
          {isRecording ? (
            <IconButton color="secondary" onClick={stopRecording}>
              <StopIcon />
            </IconButton>
          ) : (
            <IconButton color="secondary" onClick={startRecording}>
              <MicIcon />
            </IconButton>
          )}
          <IconButton color="secondary" type="submit">
            <SendIcon />
          </IconButton>
          <IconButton color="secondary" onClick={resetForm}>
            <RefreshIcon />
          </IconButton>
        </Box>
        {loading && <LinearProgress sx={{ mt: 2, width: '100%' }} />}
        {error && <Typography color="error">{error}</Typography>}
        {audioUrl && (
          <audio controls style={{ marginTop: 20 }}>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </Box>
    </Box>
  );
  
}

export default HomeApp;

