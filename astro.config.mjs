/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  
  // 🌙 Dark mode configuration
  darkMode: 'class',
  
  theme: {
    extend: {
      // 🎨 Jungian-Inspired Color Palette
      colors: {
        // 🌙 Luna - Primary palette (Moon symbolism)
        luna: {
          50: '#f8fafc',   // Moonbeam
          100: '#f1f5f9',  // Silver mist
          200: '#e2e8f0',  // Pale moonlight
          300: '#cbd5e1',  // Soft silver
          400: '#94a3b8',  // Moon shadow
          500: '#64748b',  // Lunar gray
          600: '#475569',  // Deep shadow
          700: '#334155',  // Night sky
          800: '#1e293b',  // Midnight
          900: '#0f172a',  // Void
          950: '#020617'   // Abyss
        },
        
        // ✨ Alchemy - Gold transformation palette
        alchemy: {
          50: '#fffbeb',   // Golden dawn
          100: '#fef3c7',  // Sunlight
          200: '#fde68a',  // Warm gold
          300: '#fcd34d',  // Pure gold
          400: '#fbbf24',  // Rich gold
          500: '#f59e0b',  // Alchemical gold
          600: '#d97706',  // Deep amber
          700: '#b45309',  // Bronze
          800: '#92400e',  // Copper
          900: '#78350f',  // Dark bronze
          950: '#451a03'   // Ancient metal
        },
        
        // 🔮 Mirror - Purple reflection palette
        mirror: {
          50: '#faf5ff',   // Ethereal light
          100: '#f3e8ff',  // Soft violet
          200: '#e9d5ff',  // Light purple
          300: '#d8b4fe',  // Mystic purple
          400: '#c084fc',  // Bright violet
          500: '#a855f7',  // Royal purple
          600: '#9333ea',  // Deep violet
          700: '#7c3aed',  // Rich purple
          800: '#6b21a8',  // Dark violet
          900: '#581c87',  // Deep mystic
          950: '#3b0764'   // Shadow purple
        },
        
        // 🌿 Sage - Wisdom green palette
        sage: {
          50: '#f0fdf4',   // Fresh wisdom
          100: '#dcfce7',  // Light sage
          200: '#bbf7d0',  // Soft green
          300: '#86efac',  // Bright sage
          400: '#4ade80',  // Vibrant green
          500: '#22c55e',  // Pure sage
          600: '#16a34a',  // Deep green
          700: '#15803d',  // Forest green
          800: '#166534',  // Dark sage
          900: '#14532d',  // Ancient wisdom
          950: '#052e16'   // Deep forest
        },
        
        // 🔥 Phoenix - Transformation red palette
        phoenix: {
          50: '#fef2f2',   // Gentle flame
          100: '#fee2e2',  // Soft fire
          200: '#fecaca',  // Light red
          300: '#fca5a5',  // Warm red
          400: '#f87171',  // Bright fire
          500: '#ef4444',  // Pure flame
          600: '#dc2626',  // Deep red
          700: '#b91c1c',  // Dark fire
          800: '#991b1b',  // Ember
          900: '#7f1d1d',  // Deep ember
          950: '#450a0a'   // Ash
        },
        
        // 🌊 Flow - Water blue palette
        flow: {
          50: '#f0f9ff',   // Clear water
          100: '#e0f2fe',  // Light blue
          200: '#bae6fd',  // Soft blue
          300: '#7dd3fc',  // Bright blue
          400: '#38bdf8',  // Vibrant blue
          500: '#0ea5e9',  // Pure flow
          600: '#0284c7',  // Deep blue
          700: '#0369a1',  // Ocean blue
          800: '#075985',  // Dark water
          900: '#0c4a6e',  // Deep ocean
          950: '#082f49'   // Abyss blue
        }
      },
      
      // 📝 Typography - Symbolic font families
      fontFamily: {
        'display': ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'script': ['Dancing Script', 'cursive']
      },
      
      // 📏 Spacing - Sacred geometry
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },
      
      // 📐 Border radius - Organic curves
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'blob': '40% 60% 60% 40% / 60% 30% 70% 40%'
      },
      
      // 🌟 Box shadows - Depth and mysticism
      boxShadow: {
        'luna': '0 4px 20px rgba(148, 163, 184, 0.3)',
        'alchemy': '0 4px 20px rgba(251, 191, 36, 0.3)',
        'mirror': '0 4px 20px rgba(168, 85, 247, 0.3)',
        'sage': '0 4px 20px rgba(34, 197, 94, 0.3)',
        'phoenix': '0 4px 20px rgba(239, 68, 68, 0.3)',
        'flow': '0 4px 20px rgba(14, 165, 233, 0.3)',
        'ritual': '0 8px 40px rgba(168, 85, 247, 0.4), 0 4px 20px rgba(251, 191, 36, 0.2)',
        'glow': '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
        'deep': '0 20px 60px rgba(15, 23, 42, 0.5), 0 8px 25px rgba(15, 23, 42, 0.3)'
      },
      
      // ✨ Animations - Symbolic movements
      animation: {
        // 🌙 Lunar cycles
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        
        // ✨ Alchemical transformations
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        
        // 🔮 Mirror reflections
        'mirror': 'mirror 4s ease-in-out infinite',
        'reflect': 'reflect 3s ease-in-out infinite alternate',
        
        // 🌊 Flow movements
        'wave': 'wave 3s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
        
        // 🎭 Ritual ceremonies
        'ritual': 'ritual 5s ease-in-out infinite',
        'sacred': 'sacred 6s linear infinite',
        'mandala': 'mandala 20s linear infinite',
        
        // 🌟 Individuation process
        'emerge': 'emerge 1s ease-out',
        'transform': 'transform 0.8s ease-in-out',
        'integrate': 'integrate 1.2s ease-in-out'
      },
      
      // 🎨 Keyframes - Sacred movements
      keyframes: {
        // 🌙 Floating like moon phases
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(2deg)',
            opacity: '0.9'
          }
        },
        
        // ✨ Alchemical glow
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(251, 191, 36, 0.5), 0 0 10px rgba(251, 191, 36, 0.3)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.5)',
            transform: 'scale(1.02)'
          }
        },
        
        // 🔮 Pulsing glow
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.8',
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)'
          },
          '50%': { 
            opacity: '1',
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.7), 0 0 50px rgba(168, 85, 247, 0.3)'
          }
        },
        
        // ✨ Shimmer effect
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0'
          },
          '100%': { 
            backgroundPosition: '200% 0'
          }
        },
        
        // 🔮 Mirror reflection
        mirror: {
          '0%, 100%': { 
            transform: 'scaleX(1) rotateY(0deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scaleX(-1) rotateY(180deg)',
            opacity: '0.8'
          }
        },
        
        // 🌊 Wave motion
        wave: {
          '0%, 100%': { 
            transform: 'translateX(0) translateY(0) rotate(0deg)'
          },
          '25%': { 
            transform: 'translateX(5px) translateY(-5px) rotate(1deg)'
          },
          '75%': { 
            transform: 'translateX(-5px) translateY(5px) rotate(-1deg)'
          }
        },
        
        // 🎭 Ritual movement
        ritual: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'scale(1) rotate(0deg)'
          },
          '25%': { 
            opacity: '0.9',
            transform: 'scale(1.02) rotate(90deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05) rotate(180deg)'
          },
          '75%': { 
            opacity: '0.9',
            transform: 'scale(1.02) rotate(270deg)'
          }
        },
        
        // 🌟 Sacred geometry
        sacred: {
          '0%': { 
            transform: 'rotate(0deg) scale(1)'
          },
          '100%': { 
            transform: 'rotate(360deg) scale(1)'
          }
        },
        
        // 🔮 Mandala rotation
        mandala: {
          '0%': { 
            transform: 'rotate(0deg)'
          },
          '100%': { 
            transform: 'rotate(360deg)'
          }
        },
        
        // 🌟 Emergence
        emerge: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px) scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        },
        
        // ✨ Transformation
        transform: {
          '0%': { 
            transform: 'scale(1) rotate(0deg)'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(180deg)'
          },
          '100%': { 
            transform: 'scale(1) rotate(360deg)'
          }
        },
        
        // 🔮 Integration
        integrate: {
          '0%': { 
            opacity: '0.5',
            transform: 'scale(0.8)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.1)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      
      // 🎭 Background images - Symbolic patterns
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luna-gradient': 'linear-gradient(135deg, #f1f5f9 0%, #334155 100%)',
        'alchemy-gradient': 'linear-gradient(135deg, #fef3c7 0%, #92400e 100%)',
        'mirror-gradient': 'linear-gradient(135deg, #f3e8ff 0%, #581c87 100%)',
        'ritual-gradient': 'linear-gradient(135deg, #fef3c7 0%, #f3e8ff 50%, #f1f5f9 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.4), transparent)'
      },
      
      // 📱 Screens - Responsive breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px'
      }
    }
  },
  
  // 🔌 Plugins - Extended functionality
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    
    // 🎨 Custom plugin for Jungian utilities
    function({ addUtilities, addComponents, theme }) {
      // ✨ Jungian utility classes
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        },
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(251, 191, 36, 0.7), 0 0 20px rgba(251, 191, 36, 0.5)'
        },
        '.backdrop-ritual': {
          backdropFilter: 'blur(10px) saturate(150%)',
          backgroundColor: 'rgba(168, 85, 247, 0.1)'
        },
        '.glass-luna': {
          background: 'rgba(241, 245, 249, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(241, 245, 249, 0.2)'
        },
        '.glass-alchemy': {
          background: 'rgba(251, 191, 36, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(251, 191, 36, 0.2)'
        },
        '.glass-mirror': {
          background: 'rgba(168, 85, 247, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(168, 85, 247, 0.2)'
        }
      });
      
      // 🎭 Jungian component classes
      addComponents({
        '.card-ritual': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: theme('borderRadius.2xl'),
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: theme('boxShadow.ritual'),
          transition: 'all 0.3s ease'
        },
        '.btn-alchemy': {
          background: theme('colors.alchemy.500'),
          color: theme('colors.luna.50'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.xl'),
          fontWeight: theme('fontWeight.semibold'),
          boxShadow: theme('boxShadow.alchemy'),
          transition: 'all 0.3s ease',
          '&:hover': {
            background: theme('colors.alchemy.600'),
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.glow')
          }
        },
        '.text-gradient-alchemy': {
          background: `linear-gradient(135deg, ${theme('colors.alchemy.400')}, ${theme('colors.alchemy.600')})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        },
        '.text-gradient-mirror': {
          background: `linear-gradient(135deg, ${theme('colors.mirror.400')}, ${theme('colors.mirror.600')})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }
      });
    }
  ]
}
