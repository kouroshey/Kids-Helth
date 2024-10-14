import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  safelist: [
    "bg-blue-400",
    "bg-green-500",
    "bg-red-500",
    "bg-indigo-300",
    "bg-sky-600",
    "bg-primary",
  ],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        vazir: ["var(--font-vazir)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        white: "var(--white)",
        "gradient-grey": "var(--gradient-grey)",
        "gradient-primary": "var(--gradient-primary)",
        "gradient-info": "var(--gradient-info)",
        "gradient-error": "var(--gradient-error)",
        "gradient-warning": "var(--gradient-warning)",
        "gradient-success": "var(--gradient-success)",
        "gradient-silver-chalice-gradient":
          "var(--gradient-silver-chalice-gradient)",
        "gradient-coyote-brown-gradient":
          "var(--gradient-coyote-brown-gradient)",
        "gradient-light-green-gradient": "var(--gradient-light-green-gradient)",
        "gradient-caribbean-green-gradient":
          "var(--gradient-caribbean-green-gradient)",
        "gradient-turquoise-gradient": "var(--gradient-turquoise-gradient)",
        "gradient-light-blue-gradient": "var(--gradient-light-blue-gradient)",
        "gradient-dark-blue-gradient": "var(--gradient-dark-blue-gradient)",
        "gradient-amethyst-purple-gradient":
          "var(--gradient-amethyst-purple-gradient)",
        "gradient-red-crayola-gradient": "var(--gradient-red-crayola-gradient)",
        "gradient-mandarin-orange-gradient":
          "var(--gradient-mandarin-orange-gradient)",
        "gradient-tangerine-gradient": "var(--gradient-tangerine-gradient)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          900: "var(--primary-900)",
          800: "var(--primary-800)",
          700: "var(--primary-700)",
          600: "var(--primary-600)",
          500: "var(--primary-500)",
          400: "var(--primary-400)",
          300: "var(--primary-300)",
          200: "var(--primary-200)",
          100: "var(--primary-100)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          900: "var(--secondary-900)",
          800: "var(--secondary-800)",
          700: "var(--secondary-700)",
          600: "var(--secondary-600)",
          500: "var(--secondary-500)",
          400: "var(--secondary-400)",
          300: "var(--secondary-300)",
          200: "var(--secondary-200)",
          100: "var(--secondary-100)",
        },
        gray: {
          DEFAULT: "hsl(var(--gray))",
          900: "var(--gray-900)",
          800: "var(--gray-800)",
          700: "var(--gray-700)",
          600: "var(--gray-600)",
          500: "var(--gray-500)",
          400: "var(--gray-400)",
          300: "var(--gray-300)",
          200: "var(--gray-200)",
          100: "var(--gray-100)",
          50: "var(--gray-50)",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--error-foreground))",
          900: "var(--info-900)",
          800: "var(--info-800)",
          700: "var(--info-700)",
          600: "var(--info-600)",
          500: "var(--info-500)",
          400: "var(--info-400)",
          300: "var(--info-300)",
          200: "var(--info-200)",
          100: "var(--info-100)",
          50: "var(--info-50)",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          900: "var(--success-900)",
          800: "var(--success-800)",
          700: "var(--success-700)",
          600: "var(--success-600)",
          500: "var(--success-500)",
          400: "var(--success-400)",
          300: "var(--success-300)",
          200: "var(--success-200)",
          100: "var(--success-100)",
          50: "var(--success-50)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          900: "var(--warning-900)",
          800: "var(--warning-800)",
          700: "var(--warning-700)",
          600: "var(--warning-600)",
          500: "var(--warning-500)",
          400: "var(--warning-400)",
          300: "var(--warning-300)",
          200: "var(--warning-200)",
          100: "var(--warning-100)",
          50: "var(--warning-50)",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          900: "var(--error-900)",
          800: "var(--error-800)",
          700: "var(--error-700)",
          600: "var(--error-600)",
          500: "var(--error-500)",
          400: "var(--error-400)",
          300: "var(--error-300)",
          200: "var(--error-200)",
          100: "var(--error-100)",
          50: "var(--error-50)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        "light-green": {
          900: "var(--light-green-900)",
          800: "var(--light-green-800)",
          700: "var(--light-green-700)",
          600: "var(--light-green-600)",
          500: "var(--light-green-500)",
          400: "var(--light-green-400)",
          300: "var(--light-green-300)",
          200: "var(--light-green-200)",
          100: "var(--light-green-100)",
          50: "var(--light-green-50)",
        },
        green: {
          DEFAULT: "hsl(var(--green))",
          900: "var(--green-900)",
          800: "var(--green-800)",
          700: "var(--green-700)",
          600: "var(--green-600)",
          500: "var(--green-500)",
          400: "var(--green-400)",
          300: "var(--green-300)",
          200: "var(--green-200)",
          100: "var(--green-100)",
          50: "var(--green-50)",
        },
        blue: {
          900: "var(--blue-900)",
          800: "var(--blue-800)",
          700: "var(--blue-700)",
          600: "var(--blue-600)",
          500: "var(--blue-500)",
          400: "var(--blue-400)",
          300: "var(--blue-300)",
          200: "var(--blue-200)",
          100: "var(--blue-100)",
          50: "var(--blue-50)",
        },
        pink: {
          900: "var(--pink-900)",
          800: "var(--pink-800)",
          700: "var(--pink-700)",
          600: "var(--pink-600)",
          500: "var(--pink-500)",
          400: "var(--pink-400)",
          300: "var(--pink-300)",
          200: "var(--pink-200)",
          100: "var(--pink-100)",
          50: "var(--pink-50)",
        },
        red: {
          900: "var(--red-900)",
          800: "var(--red-800)",
          700: "var(--red-700)",
          600: "var(--red-600)",
          500: "var(--red-500)",
          400: "var(--red-400)",
          300: "var(--red-300)",
          200: "var(--red-200)",
          100: "var(--red-100)",
          50: "var(--red-50)",
        },
      },
      borderRadius: {
        sm: "0.4rem",
        md: "0.8rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.9rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "5rem",
    },
    screens: {
      xs: "360px",
      sm: "560px",
      md: "760px",
      lg: "960px",
      xl: "1280px",
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
