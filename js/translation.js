      var lang = window.location.search.substring(5);
      //var oi = 'pt';
      // use plugins and options as needed, for options, detail see
      // http://i18next.com/docs/
      i18next.init({
        lng: lang, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
        resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
          en: {
            translation: {
              introDiv: {
                head: 'Pousada Cumbuco KitSurf',
                desc: 'Meet our hostel',
                button: 'Page Two'
              }
            }
          },

          pt: {
            translation: {
              introDiv: {
                head: 'Pousada Cumbuco KitSurf',
                desc: 'Conheça a nossa pousada',
                button: 'Faça um tour'
              }
            }
          },

          es: {
            translation: {
              introDiv: {
                head: 'Pousada Cumbuco KitSurf',
                desc: 'Conoce a nuestro posada',
                button: 'Página dos'
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
        //$('.nav').localize();
        $('body').localize();
      });