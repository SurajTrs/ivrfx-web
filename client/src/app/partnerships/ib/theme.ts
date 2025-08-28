// Theme configuration for IB Page
export const theme = {
  colors: {
    primary: '#6f42c1',
    primaryLight: '#8e6bc8',
    primaryLighter: '#e2d9f3',
    primaryDark: '#4a1d96',
    dark: '#2d1b69',
    light: '#f8f9fa',
    white: '#ffffff',
    gradient: 'linear-gradient(135deg, #6f42c1 0%, #4a1d96 100%)',
    shadow: '0 4px 20px rgba(111, 66, 193, 0.15)',
    text: {
      primary: '#2d1b69',
      secondary: '#6c757d',
      light: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: '3.5rem',
    h2: '2.5rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1.25rem',
    lead: '1.25rem',
    body: '1rem',
    small: '0.875rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    pill: '50rem',
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.1)',
  },
  transitions: {
    default: 'all 0.3s ease',
    button: 'all 0.2s ease-in-out',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

export const globalStyles = `
  :root {
    --bs-primary: ${theme.colors.primary};
    --bs-primary-rgb: 111, 66, 193;
    --bs-primary-bg-subtle: ${theme.colors.primaryLighter};
    --bs-link-color: ${theme.colors.primary};
    --bs-link-hover-color: ${theme.colors.primaryDark};
    --bs-border-color: #e9ecef;
    --bs-border-width: 1px;
    --bs-border-radius: ${theme.borderRadius.md};
    --bs-border-radius-lg: ${theme.borderRadius.lg};
    --bs-border-radius-xl: 1rem;
    --bs-font-sans-serif: ${theme.typography.fontFamily};
  }

  body {
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.text.primary};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: ${theme.colors.dark};
  }

  h1 { font-size: ${theme.typography.h1}; }
  h2 { font-size: ${theme.typography.h2}; }
  h3 { font-size: ${theme.typography.h3}; }
  h4 { font-size: ${theme.typography.h4}; }
  h5 { font-size: ${theme.typography.h5}; }

  .lead {
    font-size: ${theme.typography.lead};
    font-weight: 400;
    color: ${theme.colors.text.secondary};
  }

  .btn {
    font-weight: 600;
    border-radius: ${theme.borderRadius.pill};
    padding: 0.5rem 1.5rem;
    transition: ${theme.transitions.button};
  }

  .btn-primary {
    background: ${theme.colors.gradient};
    border: none;
    box-shadow: 0 4px 15px rgba(111, 66, 193, 0.3);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(111, 66, 193, 0.4);
    background: ${theme.colors.primaryDark};
  }

  .btn-outline-primary {
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
  
  .btn-outline-primary:hover {
    background: ${theme.colors.primary};
    color: white;
  }

  .text-primary {
    color: ${theme.colors.primary} !important;
  }

  .bg-primary {
    background: ${theme.colors.primary} !important;
  }

  .border-primary {
    border-color: ${theme.colors.primary} !important;
  }
`;
