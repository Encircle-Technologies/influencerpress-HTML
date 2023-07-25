module.exports = {
    mode: 'jit',
    content: 
            ['./pages/*.html',
            './assets/**/*.js'],
    corePlugins: {
        preflight: false,   
    },
    darkMode: 'class', // or 'media' or 'class' 
    theme: {
        fontFamily: {
            primary: ['Inter'],
            secondary: ['Zimra'],
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            inherit: 'inherit',   
            none: 'none',
            '2': '2 2 0%',
            '120': '0 0 120px',
            '196': '0 0 196px',
            '212': '0 0 212px',
            '37': '0 0 37.3%',
            '60': '0 0 60%',
        },
        colors: {
            transparent: 'transparent',
            white: '#ffffff',
            black: '#000000',
            black100: '#111111',
            darkgray: '#080808',
        },
        shadows: {
            
        },
        container: {
            center: true,
            padding: '15px',
        },
        zIndex: {
            '-1': '-1',
            0: 0,
            1: 1,
            9: 9,
            10: 10,
            20: 20,
            11: 11,
            12: 12,
            98: 98,
            99: 99,
            100: 100,
            999: 999,
            9999: 9999,
        },
        padding: {
            0: '0px', 
            5: '5px', 
            10: '10px', 
            15: '15px', 
            20: '20px', 
            25: '25px', 
            30: '30px', 
            35: '35px', 
            40: '40px', 
            45: '45px', 
            50: '50px', 
            50: '50px', 
            55: '55px', 
            60: '60px', 
            65: '65px', 
            70: '70px', 
            75: '75px', 
            80: '80px', 
            85: '85px',
            90: '90px',
            95: '95px',
            100: '100px',            
        },
        margin: {
            auto: 'auto',
            0: '0px', 
            5: '5px', 
            10: '10px', 
            15: '15px', 
            20: '20px', 
            25: '25px', 
            30: '30px', 
            35: '35px', 
            40: '40px', 
            45: '45px', 
            50: '50px', 
            50: '50px', 
            55: '55px', 
            60: '60px', 
            65: '65px', 
            70: '70px', 
            75: '75px', 
            80: '80px', 
            85: '85px',
            90: '90px',
            95: '95px',
            100: '100px',
            'minus-15': '-15px',
        },
        letterSpacing: {
            '1': '0.01em',
            '4': '0.04em',
            '5': '0.05em',
            '6': '0.06em',
            '8': '0.08em',            
            '10': '0.1em',         
            '15': '0.15em',
            '47': '0.47em',
        },
        fontSize: {
            10: '10px',
            12: '12px',
            14: '14px',
            16: '16px',
            17: '17px',
            18: '18px',
            19: '19px',
            20: '20px',
            21: '21px',
            22: '22px',
            24: '24px',
            26: '26px',
            28: '28px',
            30: '30px',
            32: '32px',
            36: '36px',
            38: '38px',
            40: '40px',
            44: '44px',
            50: '50px',
            56: '56px',
            60: '60px',
            66: '66px',
            72: '72px',
            78: '78px',
        },
        fontWeight: {
            100: '100',
            200: '200',
            300: '300',
            400: '400',
            500: '500',
            600: '600',
            800: '800',
            900: '900',
        },
        lineHeight: {
            12: '12px',
            14: '14px',
            16: '16px',
            18: '18px',
            19: '19px',
            20: '20px',
            22: '22px',
            26: '26px',
            29: '29px',
            30: '30px',
            32: '32px',
            33: '33px',
            36: '36px',
            38: '38px',
            41: '41px',
            44: '44px',
            48: '48px',
            68: '68px',
        },
        inset: {
            0: '0px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            8: '8px',
            9: '9px',
            10: '10px',
            13: '13px',
            15: '15px',
            20: '20px',
            22: '22px',
            30: '30px',
            35: '35px',
            40: '40px',
            50: '50px',
            60: '60px',     
            70: '70px',  
            80: '80px',     
            100: '100px',     
            130: '130px',
            150: '150px',
            160: '160px',
        },
        backgroundImage: theme => ({           
            none: 'none',
            'header-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 62.07%)',
            'box-gradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
            'social-gradient': 'linear-gradient(128deg, rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0))',
        }),
        borderRadius: {
            none: '0',
            1: '1px',
            2: '2px',
            4: '4px',
            5: '5px',
            30: '30px',
            50: '50%',
            100: '100%',
            500: '500px', 
            999: '999px',
        },
        translate: {
            0: '0px',
            'minus_50': '-50%',
        },
        transitionProperty: {
            
        },
        keyframes: {
            stickySlideDown: {
                '0%': { transform: 'translateY(-100%)', opacity: '0.7' },
                '100%': { transform: 'translateY(0)', opacity: '1' }
            } 
        }, 
        animation: {
            stickySlideDown: 'stickySlideDown 0.5s',
        },
        backgroundSize: {
            100: '100%',
            110: '110%',
            120: '120%',
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        blur: {
            10: '10px',
        },
        brightness: {

        },
        borderWidth: {
            DEFAULT: '1px',
            0.8: '0.8px',  
            2: '2px',
            0: '0px',
        },
        scale: {
            
        },
        boxShadow: {
            none: 'none',
            
        },
        dropShadow: {
            none: 'none',  
        }, 
        contrast: {},
        outline: {
            none: 'none',
        },
        ringOffsetWidth: {},
        ringWidth: {},
        saturate: {},
        sepia: {},
        skew: {},
        strokeWidth: {},
        transformOrigin: {},
        extend: {
            backdropBlur: {
                sm: '4px',
                md: '8px',
                xs: '10px',
            },
            maxWidth: {
                auto: 'auto',
                container: '1400px',
            },
            width: {
                10: '10px',
                '20_per': '20%',
                '25_per': '25%',
                '30_per': '30%',
                '40_per': '40%',
                '50_per': '50%',
                '60_per': '60%',
                '70_per': '70%',
                '75_per': '75%',
                '80_per': '80%',
                '85_per': '85%',  
                '90_per': '90%',
            },
            height: {
                '70_vh': '70vh',
            },
            minHeight: {
                auto: 'auto',
            },
            gap: {
                
            },
            backgroundOpacity: {
                
            },
            maxHeight: {
                
            },
            screens: {
                xl: { 'min': '1200px' },
                xlscreen: { 'max': '1199.9px' },
                lgscreen: { 'max': '1023px' },
                tablet_big: {'raw': '(max-width: 1199px) and (min-width: 1024px)'},
                tablet: {'raw': '(max-width: 1023px) and (min-width: 768px)'}, 
                mobile: {'raw': '(max-width: 767px) and (min-width: 576px)'},
                mobile_small: {'raw': '(max-width: 575px)'},
                mobile_extra_small: {'raw': '(max-width: 479px)'},
            },
        }
    },
    variantOrder: [

    ],
    variants: {
        // extend: {},
    },
    plugins: [
        // require('tailwindcss'),
        function ({ addComponents }) {
            addComponents({

                '.container-xl': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '940px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1340px',
                        margin: 'auto',
                    },
                },


                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '940px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1240px',
                    },
                }
            })
        }

    ],
}