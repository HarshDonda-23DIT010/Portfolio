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
				neon: {
					cyan: 'hsl(var(--neon-cyan))',
					purple: 'hsl(var(--neon-purple))',
					green: 'hsl(var(--neon-green))',
					pink: 'hsl(var(--neon-pink))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-card': 'var(--gradient-card)'
			},
			backgroundSize: {
				'size-200': '200% 200%',
				'size-300': '300% 300%'
			},
			boxShadow: {
				'neon-cyan': 'var(--shadow-neon-cyan)',
				'neon-purple': 'var(--shadow-neon-purple)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'rotate-cube': 'rotateCube 2s infinite linear',
				'particle-float': 'particle-float 20s infinite linear',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 3s infinite',
				'gradient-shift': 'gradientShift 3s ease infinite',
				
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
				float: {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-10px) rotate(1deg)' 
					},
					'50%': { 
						transform: 'translateY(-20px) rotate(0deg)' 
					},
					'75%': { 
						transform: 'translateY(-10px) rotate(-1deg)' 
					}
				},
				'particle-float': {
					'0%': {
						transform: 'translateY(100vh) translateX(0) rotate(0deg) scale(0)',
						opacity: '0'
					},
					'5%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'10%': {
						transform: 'translateY(90vh) translateX(10px) rotate(45deg) scale(1)'
					},
					'25%': {
						transform: 'translateY(75vh) translateX(-20px) rotate(90deg) scale(1.2)'
					},
					'50%': {
						transform: 'translateY(50vh) translateX(30px) rotate(180deg) scale(1)'
					},
					'75%': {
						transform: 'translateY(25vh) translateX(-15px) rotate(270deg) scale(0.8)'
					},
					'95%': {
						opacity: '1',
						transform: 'translateY(5vh) translateX(5px) rotate(350deg) scale(1)'
					},
					'100%': {
						transform: 'translateY(-10vh) translateX(0) rotate(360deg) scale(0)',
						opacity: '0'
					}
				},
				pulseGlow: {
					from: {
						textShadow: '0 0 10px hsl(var(--neon-cyan) / 0.8), 0 0 20px hsl(var(--neon-cyan) / 0.6)'
					},
					to: {
						textShadow: '0 0 20px hsl(var(--neon-cyan) / 1), 0 0 30px hsl(var(--neon-cyan) / 0.8), 0 0 40px hsl(var(--neon-cyan) / 0.6)'
					}
				},
				shimmer: {
					'0%': {
						left: '-100%'
					},
					'100%': {
						left: '100%'
					}
				},
				gradientShift: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
