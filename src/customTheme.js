export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#1976d2',
            },
          }
        : {
            primary: {
              main: '#90caf9',
            },
          }),
    },
  });
  
  export const inputsCustomizations = {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
        },
      },
    },
  };
  