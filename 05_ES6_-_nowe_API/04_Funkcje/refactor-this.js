// Describes charset used in banned
const charset = {
  border: '*',
  whiteSpace: ' ',
  lTCorner: '*',
  rTCorner: '*',
  lBCorner: '*',
  rBCorner: '*',
};

const buildBanner = (text) => {
  let pattern = '';

  // Add some spacing on each side of the text
  let bannerWidth = text.length + 8;


  const getTopBorderLine = (index) => {
    if (index === 0) {
      return this.lTCorner || '*';;
    } else if (index === bannerWidth - 1) {
      return this.rTCorner || '*';
    } else {
      return this.border || '*';
    }
  }

  // Build first row of the banner
  pattern += Array(bannerWidth).fill(' ').map(getTopBorderLine).join('');
  pattern += '\n';

 
  const generateBannerMiddleSection = (element, index) => {
    if (index === 0) {
      return this.border || '*';
    } else if (index === bannerWidth - 1) {
      return this.border || '*';
    } else {
      return this.whiteSpace || ' ';
    }
  }


  pattern += Array(bannerWidth).fill(' ').map(generateBannerMiddleSection).join('');
  pattern += '\n';

  const generateBannerTextLine = (element, index) => {
    if (index === 0) {
      return this.border || '*';
    } else if (index === bannerWidth - 1) {
      return this.border || '*';
    } else {
      const textIndex = index - (bannerWidth - text.length) / 2;
      return text[textIndex] || ' ';
    }
  }

  pattern += Array(bannerWidth).fill(' ').map(generateBannerTextLine).join('');
  pattern += '\n';

  // Generate another empty line
  pattern += Array(bannerWidth).fill(' ').map(generateBannerMiddleSection).join('');
  pattern += '\n';


  const generateBottomBorder = (element, index) => {
    let leftCorenr;
    if (this.lTCorner) {
      leftCorenr = this.lTCorner;
    } else {
      leftCorenr = '*'; // Default value
    }

    let rightCroner;
    if (this.rTCorner) {
      rightCroner = this.rTCorner;
    } else {
      rightCroner = '*'; //d Default value
    }

    if (index === 0) {
      return leftCorenr;
    } else if (index === bannerWidth - 1) {
      return rightCroner;
    } else {
      return this.border || '*';
    }
  }

  // Generate bottom line
  pattern += Array(bannerWidth).fill(' ').map(generateBottomBorder).join('');

  return pattern;
}

const banner = buildBanner.bind(charset)('Test Text');


console.log(banner);
console.assert(banner === '*****************\n*               *\n*   Test Text   *\n*               *\n*****************', 'Banner is not properly generated!\n\n', banner);
