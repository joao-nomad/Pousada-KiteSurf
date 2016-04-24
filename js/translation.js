      var lang = window.location.search.substring(5);
      //var oi = 'pt';
      // use plugins and options as needed, for options, detail see
      // http://i18next.com/docs/
      i18next.init({
        lng: lang, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
        resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
          //INGLÊS
          en: {
            translation: {
              introDiv: {
                head: 'Pousada Cumbuco KitSurf',
                desc: 'Meet our hostel',
                button: 'Take a tour'
              },
              menu: {
                title: 'Main Menu',
                home: 'Home',
                about: 'About Us',
                services: 'Services',
                gallery: 'Gallery',
                language: 'Change language',
                contact: 'Contact',
                langEng: 'English',
                langPt: 'Portuguese',
                langEs: 'Spanish'
              }
            }
          },
          //PORTUGUÊS
          pt: {
            translation: {
              introDiv: {
                head: 'Pousada Cumbuco KitSurf',
                desc: 'Conheça a nossa pousada',
                button: 'Faça um tour'
              },
              menu: {
                title: 'Menu Principal',
                home: 'Início',
                about: 'Sobre Nós',
                services: 'Serviços',
                gallery: 'Galeria',
                language: 'Mudar idioma',
                contact: 'Contato',
                langEng: 'Inglês',
                langPt: 'Português',
                langEs: 'Espanhol'
              }
            }
          },
          //ESPANHOL
          es: {
            translation: {
              introDiv: {
                head: 'Pousada Cumbuco KitSurf',
                desc: 'Conoce a nuestro posada',
                button: 'Tienes um tour'
              },              
              menu: {
                title: 'Menú Principal',
                home: 'Inicio',
                about: 'Sobre Nosotros',
                services: 'Servicios',
                gallery: 'Galería',
                language: 'Cambiar el idioma',
                contact: 'Contacto',
                langEng: 'Inglés',
                langPt: 'Portugués',
                langEs: 'Español'
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