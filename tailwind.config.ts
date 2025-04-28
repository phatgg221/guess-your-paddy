
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our paddy/crop theme
				crop: {
					'primary': '#2F5233',
					'secondary': '#4F772D',
					'accent': '#D4A373',
					'brown': '#774936',
					'light': '#F5F5F0',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			backgroundImage: {
				'crop-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM0RjcxMkQiIGZpbGwtb3BhY2l0eT0iLjA0IiBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTEgMWgydjJIMVYxem00IDBoMnYySDVWMXptNCAwaDJ2Mkg5VjF6bTQgMGgydjJoLTJWMXptNCAwaDJ2MmgtMlYxem00IDBoMnYyaC0yVjF6bTQgMGgydjJoLTJWMXptNCAwaDF2MmgtMVYxem0zIDBoMnYyaC0yVjF6TTEgNWgydjJIMVY1em00IDBoMnYySDVWNXptNCAwaDJ2Mkg5VjV6bTQgMGgydjJoLTJWNXptNCAwaDJ2MmgtMlY1em00IDBoMnYyaC0yVjV6bTQgMGgydjJoLTJWNXptNCAwaDF2MmgtMVY1ek0xIDloMnYySDF2LTJ6bTQgMGgydjJINXYtMnptNCAwaDJ2Mkg5di0yem00IDBoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yem00IDBoMXYyaC0xdi0yek0xIDEzaDJ2Mkgxdi0yem00IDBoMnYySDV2LTJ6bTQgMGgydjJIOXYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnpNMSAxN2gydjJIMXYtMnptNCAwaDJ2Mkg1di0yem00IDBoMnYySDl2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6TTEgMjFoMnYySDF2LTJ6bTQgMGgydjJINXYtMnptNCAwaDJ2Mkg5di0yem00IDBoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yek0xIDI1aDJ2Mkgxdi0yem00IDBoMnYySDV2LTJ6bTQgMGgydjJIOXYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnptNCAwaDJ2MmgtMnYtMnpNMSAyOWgydjJIMXYtMnptNCAwaDJ2Mkg1di0yem00IDBoMnYySDl2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6TTEgMzNoMnYySDFWMzN6bTQgMGgydjJINVYzM3ptNCAwaDJ2Mkg5VjMzem00IDBoMnYyaC0yVjMzem00IDBoMnYyaC0yVjMzem00IDBoMnYyaC0yVjMzem00IDBoMnYyaC0yVjMzem00IDBoMnYyaC0yVjMzeiIgZmlsbD0iIzRGNzEyRCIgZmlsbC1vcGFjaXR5PSIuMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
