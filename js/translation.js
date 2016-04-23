      var lang = window.location.search.substring(5);
      //var oi = 'pt';
      // use plugins and options as needed, for options, detail see
      // http://i18next.com/docs/
      i18next.init({
        lng: lang, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
        resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
          en: {
            translation: {
              nav: {
                home: 'Home',
                page1: 'Page One',
                page2: 'Page Two'
              }
            }
          },

          pt: {
            translation: {
              nav: {
                home: 'Inicial',
                page1: 'Página um',
                page2: 'Página dois'
              }
            }
          },

          es: {
            translation: {
              nav: {
                home: 'Inicial',
                page1: 'Página uno',
                page2: 'Página dos'
              }
            }
          }
        }
      }, function(err, t) {
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        i18nextJquery.init(i18next, $);

        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        $('.nav').localize();
      });