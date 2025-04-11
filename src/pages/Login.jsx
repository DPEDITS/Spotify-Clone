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
import Signup from './Signup';

export default function Login() {
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
            p: 5,
            borderRadius: 2,
            maxWidth: 600,
            width: '100%',
            textAlign: 'center',
            mt: 5,
            background: 'linear-gradient(to bottom,rgb(14, 14, 14),rgb(37, 37, 37))',

          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify Logo"
            style={{ height: '40px', marginBottom: '20px' }}
          />
          <Typography variant="h5" fontWeight="bold" color="white" mb={3}>
            Log in to Spotify
          </Typography>

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
              Continue with Google
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
              Continue with Facebook
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
              Continue with Apple
            </Button>
            <Button
              variant="outlined"
              startIcon={<PhoneIphoneIcon />}
              sx={{
                color: 'white',
                borderColor: '#ccc',
                borderRadius: '50px',
                px: 3,
                width: '330px',
              }}
            >
              Continue with phone number
            </Button>
          </Stack>

          <Divider sx={{ bgcolor: '#333', my: 4 }} />

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
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{
                style: {
                  color: 'white',
                  borderRadius: '10px',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <Visibility sx={{ color: '#ccc' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ width: '330px' }}
            />
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
              Log In
            </Button>
          </Box>
          <Typography
            variant="body2"
            mt={2}
            color="white"
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Forgot your password?
          </Typography>

          <Typography variant="body2" mt={2} color="white">
  Don't have an account?{' '}
  <span
    style={{ textDecoration: 'underline', cursor: 'pointer' }}
    onClick={() => navigate('/signup')}
  >
    Sign up for Spotify
  </span>
</Typography>

        </Box>
        <Box
  sx={{
    width: '100%',
    height: 'auto',
    backgroundColor: '#1a1a1a', // dark grey
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
