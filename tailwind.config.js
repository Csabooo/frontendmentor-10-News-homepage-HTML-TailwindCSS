module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /*         ### Primary      */
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",

        /*         ### Neutral      */
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark-grayish-blue": "hsl(236, 13%, 42%)",
        "very-dark-blue": "hsl(240, 100%, 5%)"
      },
      fontFamily: {
        'sans': ["Inter", "sans-serif"]
      },
      fontSize: {
        base: '15px'
      },
      plugins: [],
    }
  }
}



/* font-normal	font-weight: 400;
font-bold	font-weight: 700;
font-extrabold	font-weight: 800; */