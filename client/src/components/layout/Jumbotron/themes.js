// PATTERN IMPORTS
import homeBackground from '../../../assets/patterns/pixel-dots.svg';
import errorBackground from '../../../assets/patterns/brick-wall.svg';
import contactBackground from '../../../assets/patterns/death-star.svg';
import newsletterBackground from '../../../assets/patterns/eyes.svg';
import aboutBackground from '../../../assets/patterns/signal.svg';

// CUSTOM THEMES FOR JUMBOTRON COMPONENT
// HOME
const homeTheme = {
  backgroundImg: homeBackground,
  jumboHeight: '30vh',
};

// NEWSLETTER
const newsletterTheme = {
  backgroundImg: newsletterBackground,
  jumboHeight: '30vh',
};

// ABOUT
const aboutTheme = {
  backgroundImg: aboutBackground,
  jumboHeight: '30vh',
};

// CONTACT
const contactTheme = {
  headSize: '4rem',
  backgroundImg: contactBackground,
  jumboHeight: '30vh',
};

// NOTFOUND
const errorTheme = {
  textColor: 'red',
  headFont: 'monospace',
  overlayColor: `rgba(169, 44, 91, 0.95), rgba(185, 48, 48, 0.95)`,
  backgroundImg: errorBackground,
  jumboHeight: '30vh',
};

export { homeTheme, newsletterTheme, aboutTheme, errorTheme, contactTheme };
