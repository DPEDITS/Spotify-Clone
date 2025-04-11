import React from 'react';
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Visibility from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        background: 'linear-gradient(to bottom,rgb(46, 46, 46), #000000)',
        px: 2,
        py: -3,
      }}
    >
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start', // ensures content starts at top
    pt: 8, // adds padding from the top (adjust as needed)

  }}
>

        <Box
          sx={{
            bgcolor: '#000',
            borderRadius: 2,
            maxWidth: 300,
            width: '100%',
            textAlign: 'center',
            backgroundColor:'transparent',
        }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify Logo"
            style={{ height: '40px', marginBottom: '20px' }}
          />
          <Typography variant="h5" fontWeight="1000" fontSize={30} color="white" mb={3}>
          Sign up to start listening
          </Typography>

          <Box
            component="form"
            noValidate
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <TextField
              label="Email or username"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: {
                  color: 'white',
                  borderRadius: '10px',
                },
              }}
              sx={{ width: '330px' }}
            />
             <span
    style={{ fontSize:'12px' ,textDecoration: 'underline', cursor: 'pointer', color:'green', textAlign: 'left', width: '330px', marginBottom: '10px' }}
    onClick={() => navigate('/login')}
  >
   Use phone number instead.
  </span>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: '#1ED760',
                color: '#000',
                fontWeight: 'bold',
                borderRadius: '50px',
                width: '330px',
                '&:hover': {
                  bgcolor: '#1fdf64',
                },
              }}
            >
              Next
            </Button>
          </Box>
          <Divider sx={{ bgcolor: '#333', my: 4 }} />

          <Stack spacing={2} alignItems="center">
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                color: 'white',
                borderColor: '#ccc',
                borderRadius: '50px',
                px: 3,
                width: '330px',
              }}
            >
              Sign up with Google
            </Button>
            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{
                color: 'white',
                borderColor: '#ccc',
                borderRadius: '50px',
                px: 3,
                width: '330px',
              }}
            >
              Sign up with Facebook
            </Button>
            <Button
              variant="outlined"
              startIcon={<AppleIcon />}
              sx={{
                color: 'white',
                borderColor: '#ccc',
                borderRadius: '50px',
                px: 3,
                width: '330px',
              }}
            >
              Sign up with Apple
            </Button>
          </Stack>

          <Divider sx={{ bgcolor: '#333', my: 4 }} />

          <Typography variant="body2" mt={2} color="grey">
  Already have an account?{' '}
  <span
    style={{ textDecoration: 'underline', cursor: 'pointer', color:'white' }}
    onClick={() => navigate('/login')}
  >
    Log in here
  </span>
</Typography>

        </Box>
        <Box
  sx={{
    width: '22%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    py: 5, // padding top & bottom
    px: 2, // padding left & right
    mt: 4,
  }}
>
  <Typography
    variant="caption"
    color="white"
    textAlign="center"
  >
    This site is protected by reCAPTCHA and the Google{' '}
    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
      Privacy Policy
    </span>{' '}
    and{' '}
    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
      Terms of Service
    </span>{' '}
    apply.
  </Typography>
</Box>

        </Box>
      </Box>
  );
}
