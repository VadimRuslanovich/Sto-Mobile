var apiBaseUri = "http://localhost:9400/api";
var cars = [
  {
      "Brand": "Acura",
      "Models": [
        "Acura MDX crossover",
        "Acura NSX coupe",
        "Acura RDX crossover",
        "Acura TLX sedan"
      ]
  },
  {
      "Brand": "Alfa Romeo",
      "Models": [
        "Alfa Romeo 4C coupe",
        "Alfa Romeo Giulia sedan",
        "Alfa Romeo Giulietta hatchback",
        "Alfa Romeo MiTo hatchback"
      ]
  },
  {
      "Brand": "Aston Martin",
      "Models": [
        "Aston Martin DB9 Volante cabriolet",
        "Aston Martin DB9 Volante coupe",
        "Aston Martin Rapide sedan",
        "Aston Martin V12 Vantage coupe",
        "Aston Martin Vanquish coupe"
      ]
  },
  {
      "Brand": "Audi",
      "Models": [
        "Audi A1 Sportback hatchback",
        "Audi A3 cabriolet",
        "Audi A3 sedan",
        "Audi A3 hatchback",
        "Audi A4 allroad wagon",
        "Audi A4 sedan",
        "Audi A4 wagon",
        "Audi A5 cabriolet",
        "Audi A5 coupe",
        "Audi A5 hatchback",
        "Audi A6 allroad quattro wagon",
        "Audi A6 sedan",
        "Audi A6 wagon",
        "Audi A7 Sportback hatchback",
        "Audi A8 sedan",
        "Audi Q3 crossover",
        "Audi Q5 crossover",
        "Audi Q7 crossover",
        "Audi R8 coupe",
        "Audi RS 5 cabriolet",
        "Audi RS 5 coupe",
        "Audi RS 6 wagon",
        "Audi RS 7 Sportback hatchback",
        "Audi RS Q3 crossover",
        "Audi S3 cabriolet",
        "Audi S3 sedan",
        "Audi S3 hatchback",
        "Audi S4 sedan",
        "Audi S5 cabriolet",
        "Audi S5 coupe",
        "Audi S5 hatchback",
        "Audi S6 sedan",
        "Audi S6 wagon",
        "Audi S7 Sportback hatchback",
        "Audi S8 sedan",
        "Audi SQ5 crossover",
        "Audi TT cabriolet",
        "Audi TT coupe",
        "Audi TTS cabriolet",
        "Audi TTS coupe"
      ]
  },
  {
      "Brand": "Bentley",
      "Models": [
        "Bentley Bentayga crossover",
        "Bentley Continental GT cabriolet",
        "Bentley Continental GT coupe",
        "Bentley Flying Spur sedan",
        "Bentley Mulsanne sedan"
      ]
  },
  {
      "Brand": "BMW",
      "Models": [
        "BMW 1 hatchback",
        "BMW 2 Active Tourer minivan",
        "BMW 2 Gran Tourer minivan",
        "BMW 2 cabriolet",
        "BMW 2 coupe",
        "BMW 3 Gran Turismo hatchback",
        "BMW 3 sedan",
        "BMW 4 Gran Coupe coupe",
        "BMW 4 cabriolet",
        "BMW 4 coupe",
        "BMW 5 Gran Turismo hatchback",
        "BMW 5 sedan",
        "BMW 5 wagon",
        "BMW 6 Gran Coupe coupe",
        "BMW 6 cabriolet",
        "BMW 6 coupe",
        "BMW 7 sedan",
        "BMW i8 coupe",
        "BMW M3 sedan",
        "BMW M4 cabriolet",
        "BMW M4 coupe",
        "BMW M5 sedan",
        "BMW M6 Gran Coupe sedan",
        "BMW M6 cabriolet",
        "BMW M6 coupe",
        "BMW X1 crossover",
        "BMW X3 crossover",
        "BMW X4 crossover",
        "BMW X5 crossover",
        "BMW X6 M crossover",
        "BMW X6 crossover",
        "BMW Z4 cabriolet"
      ]
  },
  {
      "Brand": "Brilliance",
      "Models": [
        "Brilliance H230 sedan",
        "Brilliance H230 hatchback",
        "Brilliance H530 sedan",
        "Brilliance V5 crossover"
      ]
  },
  {
      "Brand": "Cadillac",
      "Models": [
        "Cadillac ATS sedan",
        "Cadillac CT6 sedan",
        "Cadillac CTS sedan",
        "Cadillac Escalade SUV",
        "Cadillac SRX crossover",
        "Cadillac XT5 crossover"
      ]
  },
  {
      "Brand": "Changan",
      "Models": [
        "Changan CS35 crossover",
        "Changan Eado sedan"
      ]
  },
  {
      "Brand": "Chery",
      "Models": [
        "Chery Arrizo 7 sedan",
        "Chery Bonus 3 sedan",
        "Chery Bonus sedan",
        "Chery IndiS hatchback",
        "Chery M11 sedan",
        "Chery M11 hatchback",
        "Chery Tiggo 5 crossover",
        "Chery Tiggo FL crossover",
        "Chery Very hatchback"
      ]
  },
  {
      "Brand": "Chevrolet",
      "Models": [
        "Chevrolet Camaro coupe",
        "Chevrolet Corvette Stingray coupe",
        "Chevrolet Niva SUV",
        "Chevrolet Tahoe SUV"
      ]
  },
  {
      "Brand": "Chrysler",
      "Models": [
        "Chrysler Grand Voyager minivan"
      ]
  },
  {
      "Brand": "Citroen",
      "Models": [
        "Citroen Berlingo Multispace minivan",
        "Citroen Berlingo Multispace van",
        "Citroen C3 Picasso minivan",
        "Citroen C4 Aircross crossover",
        "Citroen C4 Grand Picasso minivan",
        "Citroen C4 Picasso minivan",
        "Citroen C4 sedan",
        "Citroen C-Elysee sedan",
        "Citroen DS3 hatchback",
        "Citroen DS4 hatchback",
        "Citroen Jumper truck",
        "Citroen Jumper van",
        "Citroen Jumpy minibus",
        "Citroen Jumpy van"
      ]
  },
  {
      "Brand": "Datsun",
      "Models": [
        "Datsun mi-DO hatchback",
        "Datsun on-DO sedan"
      ]
  },
  {
      "Brand": "DongFeng",
      "Models": [
        "DongFeng H30 Cross hatchback",
        "DongFeng S30 sedan"
      ]
  },
  {
      "Brand": "FAW",
      "Models": [
        "FAW Besturn B50 sedan",
        "FAW Oley sedan",
        "FAW V5 sedan"
      ]
  },
  {
      "Brand": "Ferrari",
      "Models": [
        "Ferrari 488 GTB coupe",
        "Ferrari 488 Spider cabriolet",
        "Ferrari 488GTB cabriolet",
        "Ferrari 488GTB coupe",
        "Ferrari California T cabriolet",
        "Ferrari F12 Berlinetta coupe",
        "Ferrari FF hatchback",
        "Ferrari LaFerrari coupe"
      ]
  },
  {
      "Brand": "Fiat",
      "Models": [
        "Fiat 500 hatchback",
        "Fiat 500X crossover",
        "Fiat Doblo Panorama minivan",
        "Fiat Doblo Panorama van",
        "Fiat Ducato van",
        "Fiat Freemont minivan",
        "Fiat Punto hatchback",
        "Fiat Scudo minibus",
        "Fiat Scudo van"
      ]
  },
  {
      "Brand": "Ford",
      "Models": [
        "Ford EcoSport crossover",
        "Ford Explorer SUV",
        "Ford Fiesta sedan",
        "Ford Fiesta hatchback",
        "Ford Focus sedan",
        "Ford Focus wagon",
        "Ford Focus hatchback",
        "Ford Kuga crossover",
        "Ford Mondeo sedan",
        "Ford Mustang coupe",
        "Ford Tourneo minibus",
        "Ford Transit Connect van",
        "Ford Transit van"
      ]
  },
  {
      "Brand": "Geely",
      "Models": [
        "Geely Emgrand EC7 sedan",
        "Geely Emgrand EC7 hatchback",
        "Geely Emgrand X7 crossover",
        "Geely GC6 sedan",
        "Geely MK Cross crossover"
      ]
  },
  {
      "Brand": "Great Wall",
      "Models": [
        "Great Wall H3 SUV",
        "Great Wall H5 SUV",
        "Great Wall H6 crossover",
        "Great Wall M4 crossover",
        "Great Wall Wingle 5 pickup"
      ]
  },
  {
      "Brand": "Haima",
      "Models": [
        "Haima 7 crossover",
        "Haima M3 sedan"
      ]
  },
  {
      "Brand": "Haval",
      "Models": [
        "Haval H2 crossover",
        "Haval H6 crossover",
        "Haval H8 SUV",
        "Haval H9 SUV"
      ]
  },
  {
      "Brand": "Honda",
      "Models": [
        "Honda CR-V crossover",
        "Honda Pilot crossover"
      ]
  },
  {
      "Brand": "Hyundai",
      "Models": [
        "Hyundai Elantra sedan",
        "Hyundai Equus sedan",
        "Hyundai Genesis sedan",
        "Hyundai Grand Santa Fe crossover",
        "Hyundai H1 minivan",
        "Hyundai i30 wagon",
        "Hyundai i30 hatchback",
        "Hyundai i40 sedan",
        "Hyundai i40 wagon",
        "Hyundai ix35 crossover",
        "Hyundai Santa Fe Premium crossover",
        "Hyundai Solaris sedan",
        "Hyundai Solaris hatchback",
        "Hyundai Tucson crossover",
        "Hyundai Veloster hatchback"
      ]
  },
  {
      "Brand": "Infiniti",
      "Models": [
        "Infiniti Q30 hatchback",
        "Infiniti Q50 sedan",
        "Infiniti Q70 sedan",
        "Infiniti QX30 crossover",
        "Infiniti QX50 crossover",
        "Infiniti QX60 crossover",
        "Infiniti QX70 crossover",
        "Infiniti QX80 SUV"
      ]
  },
  {
      "Brand": "Jaguar",
      "Models": [
        "Jaguar F-Pace crossover",
        "Jaguar F-Type SVR cabriolet",
        "Jaguar F-Type SVR coupe",
        "Jaguar F-Type cabriolet",
        "Jaguar F-Type coupe",
        "Jaguar XE sedan",
        "Jaguar XF sedan",
        "Jaguar XFR sedan",
        "Jaguar XFR-S sedan",
        "Jaguar XJ sedan",
        "Jaguar XJR sedan"
      ]
  },
  {
      "Brand": "Jeep",
      "Models": [
        "Jeep Cherokee SUV",
        "Jeep Compass crossover",
        "Jeep Grand Cherokee SUV",
        "Jeep Renegade SUV",
        "Jeep Wrangler SUV"
      ]
  },
  {
      "Brand": "Kia",
      "Models": [
        "Kia cee'd GT hatchback",
        "Kia cee'd GT hatchback",
        "Kia cee'd wagon",
        "Kia cee'd hatchback",
        "Kia cee'd hatchback",
        "Kia Cerato sedan",
        "Kia Mohave SUV",
        "Kia Optima sedan",
        "Kia Optima sedan",
        "Kia Picanto hatchback",
        "Kia Quoris sedan",
        "Kia Rio sedan",
        "Kia Rio hatchback",
        "Kia Sorento Prime crossover",
        "Kia Sorento crossover",
        "Kia Soul crossover",
        "Kia Sportage crossover",
        "Kia Venga hatchback"
      ]
  },
  {
      "Brand": "Lada (ÂÀÇ)",
      "Models": [
        "Lada (ÂÀÇ) 2121 (4x4) SUV",
        "Lada (ÂÀÇ) 4õ4 Urban SUV",
        "Lada (ÂÀÇ) Granta Sport sedan",
        "Lada (ÂÀÇ) Granta sedan",
        "Lada (ÂÀÇ) Granta hatchback",
        "Lada (ÂÀÇ) Kalina Cross wagon",
        "Lada (ÂÀÇ) Kalina Sport hatchback",
        "Lada (ÂÀÇ) Kalina wagon",
        "Lada (ÂÀÇ) Kalina hatchback",
        "Lada (ÂÀÇ) Largus Cross wagon",
        "Lada (ÂÀÇ) Largus wagon",
        "Lada (ÂÀÇ) Largus van",
        "Lada (ÂÀÇ) Priora sedan",
        "Lada (ÂÀÇ) Vesta sedan",
        "Lada (ÂÀÇ) Vesta wagon",
        "Lada (ÂÀÇ) XRAY crossover"
      ]
  },
  {
      "Brand": "Lamborghini",
      "Models": [
        "Lamborghini Aventador LP 700-4 cabriolet",
        "Lamborghini Aventador LP 700-4 coupe",
        "Lamborghini Huracan LP 610-4 cabriolet",
        "Lamborghini Huracan LP 610-4 coupe"
      ]
  },
  {
      "Brand": "Land Rover",
      "Models": [
        "Land Rover Defender SUV",
        "Land Rover Defender pickup",
        "Land Rover Discovery Sport SUV",
        "Land Rover Discovery SUV",
        "Land Rover Range Rover Evoque cabriolet",
        "Land Rover Range Rover Evoque crossover",
        "Land Rover Range Rover Evoque crossover",
        "Land Rover Range Rover Sport SVR SUV",
        "Land Rover Range Rover Sport SUV",
        "Land Rover Range Rover SUV"
      ]
  },
  {
      "Brand": "Lexus",
      "Models": [
        "Lexus ES sedan",
        "Lexus GS F sedan",
        "Lexus GS sedan",
        "Lexus GX SUV",
        "Lexus IS sedan",
        "Lexus LC coupe",
        "Lexus LS sedan",
        "Lexus LX SUV",
        "Lexus NX crossover",
        "Lexus RC F coupe",
        "Lexus RC coupe",
        "Lexus RX crossover"
      ]
  },
  {
      "Brand": "Lifan",
      "Models": [
        "Lifan Cebrium sedan",
        "Lifan Celliya sedan",
        "Lifan Smily hatchback",
        "Lifan Solano sedan",
        "Lifan X50 crossover",
        "Lifan X60 crossover"
      ]
  },
  {
      "Brand": "Maserati",
      "Models": [
        "Maserati Ghibli sedan",
        "Maserati GranCabrio cabriolet",
        "Maserati GranTurismo coupe",
        "Maserati Quattroporte sedan"
      ]
  },
  {
      "Brand": "Mazda",
      "Models": [
        "Mazda 3 sedan",
        "Mazda 3 hatchback",
        "Mazda 6 sedan",
        "Mazda CX-5 crossover"
      ]
  },
  {
      "Brand": "Mercedes-Benz",
      "Models": [
        "Mercedes-Benz A AMG hatchback",
        "Mercedes-Benz A hatchback",
        "Mercedes-Benz AMG GT coupe",
        "Mercedes-Benz B minivan",
        "Mercedes-Benz C AMG coupe",
        "Mercedes-Benz C AMG sedan",
        "Mercedes-Benz C AMG wagon",
        "Mercedes-Benz C coupe",
        "Mercedes-Benz C coupe",
        "Mercedes-Benz C sedan",
        "Mercedes-Benz C wagon",
        "Mercedes-Benz Citan minivan",
        "Mercedes-Benz Citan van",
        "Mercedes-Benz CLA AMG sedan",
        "Mercedes-Benz CLA AMG wagon",
        "Mercedes-Benz CLA sedan",
        "Mercedes-Benz CLA wagon",
        "Mercedes-Benz CLS AMG sedan",
        "Mercedes-Benz CLS AMG wagon",
        "Mercedes-Benz CLS sedan",
        "Mercedes-Benz CLS wagon",
        "Mercedes-Benz E AMG sedan",
        "Mercedes-Benz E cabriolet",
        "Mercedes-Benz E coupe",
        "Mercedes-Benz E sedan",
        "Mercedes-Benz G AMG SUV",
        "Mercedes-Benz G SUV",
        "Mercedes-Benz GL AMG SUV",
        "Mercedes-Benz GL SUV",
        "Mercedes-Benz GLA AMG crossover",
        "Mercedes-Benz GLA crossover",
        "Mercedes-Benz GLC crossover",
        "Mercedes-Benz GLE AMG crossover",
        "Mercedes-Benz GLE Coupe AMG crossover",
        "Mercedes-Benz GLE Coupe crossover",
        "Mercedes-Benz GLE crossover",
        "Mercedes-Benz GLS AMG SUV",
        "Mercedes-Benz GLS SUV",
        "Mercedes-Benz Maybach S sedan",
        "Mercedes-Benz S AMG coupe",
        "Mercedes-Benz S AMG sedan",
        "Mercedes-Benz S coupe",
        "Mercedes-Benz S sedan",
        "Mercedes-Benz SL AMG cabriolet",
        "Mercedes-Benz SL cabriolet",
        "Mercedes-Benz SLC AMG cabriolet",
        "Mercedes-Benz SLC cabriolet",
        "Mercedes-Benz SLK AMG cabriolet",
        "Mercedes-Benz SLK cabriolet",
        "Mercedes-Benz Sprinter minibus",
        "Mercedes-Benz Sprinter minibus",
        "Mercedes-Benz Sprinter van",
        "Mercedes-Benz Sprinter van",
        "Mercedes-Benz V minibus",
        "Mercedes-Benz Viano minibus",
        "Mercedes-Benz Vito minibus",
        "Mercedes-Benz Vito van"
      ]
  },
  {
      "Brand": "Mini",
      "Models": [
        "Mini Cabrio cabriolet",
        "Mini Clubman wagon",
        "Mini Cooper hatchback",
        "Mini Countryman crossover",
        "Mini John Cooper Works hatchback",
        "Mini Paceman hatchback"
      ]
  },
  {
      "Brand": "Mitsubishi",
      "Models": [
        "Mitsubishi ASX crossover",
        "Mitsubishi i-MiEV hatchback",
        "Mitsubishi L200 pickup",
        "Mitsubishi Lancer sedan",
        "Mitsubishi Outlander crossover",
        "Mitsubishi Pajero Sport SUV",
        "Mitsubishi Pajero SUV"
      ]
  },
  {
      "Brand": "Nissan",
      "Models": [
        "Nissan Almera sedan",
        "Nissan GT-R coupe",
        "Nissan Juke crossover",
        "Nissan Murano crossover",
        "Nissan Pathfinder SUV",
        "Nissan Patrol SUV",
        "Nissan Qashqai crossover",
        "Nissan Sentra sedan",
        "Nissan Teana sedan",
        "Nissan Terrano crossover",
        "Nissan Tiida hatchback",
        "Nissan X-Trail crossover"
      ]
  },
  {
      "Brand": "Peugeot",
      "Models": [
        "Peugeot 2008 crossover",
        "Peugeot 208 hatchback",
        "Peugeot 3008 crossover",
        "Peugeot 301 sedan",
        "Peugeot 308 GT Line hatchback",
        "Peugeot 308 GTI hatchback",
        "Peugeot 308 hatchback",
        "Peugeot 4008 crossover",
        "Peugeot 408 sedan",
        "Peugeot 508 sedan",
        "Peugeot Boxer minibus",
        "Peugeot Boxer van",
        "Peugeot Expert minibus",
        "Peugeot Expert van",
        "Peugeot Partner Tepee minivan",
        "Peugeot Partner Tepee van"
      ]
  },
  {
      "Brand": "Porsche",
      "Models": [
        "Porsche 718 Boxster cabriolet",
        "Porsche 911 Targa cabriolet",
        "Porsche 911 cabriolet",
        "Porsche 911 coupe",
        "Porsche 918 Spyder cabriolet",
        "Porsche Boxster cabriolet",
        "Porsche Cayenne crossover",
        "Porsche Cayman GT4 coupe",
        "Porsche Cayman coupe",
        "Porsche Macan crossover",
        "Porsche Panamera hatchback"
      ]
  },
  {
      "Brand": "Ravon",
      "Models": [
        "Ravon Gentra sedan",
        "Ravon Matiz hatchback",
        "Ravon Nexia sedan",
        "Ravon R2 hatchback"
      ]
  },
  {
      "Brand": "Renault",
      "Models": [
        "Renault Clio RS hatchback",
        "Renault Duster crossover",
        "Renault Espace minivan",
        "Renault Fluence sedan",
        "Renault Kangoo minivan",
        "Renault Kangoo van",
        "Renault Koleos crossover",
        "Renault Logan sedan",
        "Renault Logan sedan",
        "Renault Master van",
        "Renault Megane RS hatchback",
        "Renault Megane hatchback",
        "Renault Sandero Stepway hatchback",
        "Renault Sandero hatchback"
      ]
  },
  {
      "Brand": "Rolls-Royce",
      "Models": [
        "Rolls-Royce Dawn cabriolet",
        "Rolls-Royce Ghost sedan",
        "Rolls-Royce Phantom cabriolet",
        "Rolls-Royce Phantom coupe",
        "Rolls-Royce Phantom sedan",
        "Rolls-Royce Wraith sedan"
      ]
  },
  {
      "Brand": "Skoda",
      "Models": [
        "Skoda Octavia RS wagon",
        "Skoda Octavia RS hatchback",
        "Skoda Octavia wagon",
        "Skoda Octavia hatchback",
        "Skoda Rapid hatchback",
        "Skoda Superb wagon",
        "Skoda Superb hatchback",
        "Skoda Yeti crossover"
      ]
  },
  {
      "Brand": "Smart",
      "Models": [
        "Smart forfour hatchback",
        "Smart fortwo cabriolet",
        "Smart fortwo hatchback"
      ]
  },
  {
      "Brand": "SsangYong",
      "Models": [
        "SsangYong Actyon crossover",
        "SsangYong Stavic minivan"
      ]
  },
  {
      "Brand": "Subaru",
      "Models": [
        "Subaru BRZ coupe",
        "Subaru Forester crossover",
        "Subaru Legacy sedan",
        "Subaru Outback wagon",
        "Subaru WRX STi sedan",
        "Subaru WRX sedan",
        "Subaru XV crossover"
      ]
  },
  {
      "Brand": "Suzuki",
      "Models": [
        "Suzuki Grand Vitara SUV",
        "Suzuki Jimny SUV",
        "Suzuki Vitara crossover"
      ]
  },
  {
      "Brand": "Tesla",
      "Models": [
        "Tesla Model S hatchback",
        "Tesla Model X crossover"
      ]
  },
  {
      "Brand": "Toyota",
      "Models": [
        "Toyota Alphard minivan",
        "Toyota Camry sedan",
        "Toyota Corolla sedan",
        "Toyota GT86 coupe",
        "Toyota Hiace minibus",
        "Toyota Highlander crossover",
        "Toyota Hilux pickup",
        "Toyota Land Cruiser Prado SUV",
        "Toyota Land Cruiser SUV",
        "Toyota Prius hatchback",
        "Toyota RAV4 crossover"
      ]
  },
  {
      "Brand": "Volkswagen",
      "Models": [
        "Volkswagen Amarok pickup",
        "Volkswagen Beetle hatchback",
        "Volkswagen Crafter van",
        "Volkswagen Golf R hatchback",
        "Volkswagen Golf hatchback",
        "Volkswagen Jetta sedan",
        "Volkswagen Passat CC sedan",
        "Volkswagen Passat sedan",
        "Volkswagen Polo sedan",
        "Volkswagen Tiguan crossover",
        "Volkswagen Touareg SUV",
        "Volkswagen Transporter flatbed truck",
        "Volkswagen Transporter minibus",
        "Volkswagen Transporter van"
      ]
  },
  {
      "Brand": "Volvo",
      "Models": [
        "Volvo S60 Cross Counry sedan",
        "Volvo S60 sedan",
        "Volvo S80 sedan",
        "Volvo S90 sedan",
        "Volvo V40 Cross Country crossover",
        "Volvo V60 Cross Country wagon",
        "Volvo XC60 crossover",
        "Volvo XC70 wagon",
        "Volvo XC90 crossover"
      ]
  },
  {
      "Brand": "ÃÀÇ",
      "Models": [
        "ÃÀÇ «Ãàçåëü-Áèçíåñ» 2705 van",
        "ÃÀÇ «Ãàçåëü-Áèçíåñ» 3221 minibus",
        "ÃÀÇ «Ãàçåëü-Áèçíåñ» 3221 minibus",
        "ÃÀÇ «Ãàçåëü-Áèçíåñ» 3221 minibus",
        "ÃÀÇ «Ãàçåëü-Áèçíåñ» 3302 flatbed truck",
        "ÃÀÇ «Ñîáîëü-Áèçíåñ» 2310 flatbed truck"
      ]
  },
  {
      "Brand": "ÓÀÇ",
      "Models": [
        "ÓÀÇ Hunter SUV",
        "ÓÀÇ Patriot SUV",
        "ÓÀÇ Pickup pickup"
      ]
  }
];

angular.module('starter.services', [])
.service('authenticationService', function ($q, $localStorage, $http) {
    var authStatus = {
        isAuth: false,
        email: null,
        role: null,
        token: null
    };

    var login = function (email, password) {
        logout();
        var data = "grant_type=password" +
          "&username=" + email.toLowerCase() +
          "&password=" + password;
        var deferred = $q.defer();
        $http.post(apiBaseUri + "/token", data, {
            headers: { 'Content-Type': "application/x-www-form-urlencoded" }
        }).success(function (response) {
            authStatus.isAuth = true;
            authStatus.email = email;
            authStatus.token = response.access_token;
            authStatus.role = response.role;
            $localStorage.authStatus = authStatus;
            debugger
            deferred.resolve();
        }).error(function (error) {
            debugger
            logout();
            deferred.reject(error);
        });
        return deferred.promise;
    };

    var register = function (userInfo) {
        var deferred = $q.defer();
        debugger
        $http.post(apiBaseUri + "/signup", userInfo, {
            headers: { 'Content-Type': "application/json" }
        })
          .success(function () {
              debugger
              deferred.resolve();
          }).error(function (error) {
              debugger
              logout();
              deferred.reject(error);
          });
        return deferred.promise;
    };

    var logout = function () {
        authStatus.isAuth = false;
        authStatus.email = null;
        authStatus.token = null;
        authStatus.role = null;
        delete $localStorage.authStatus;
    };

    var getStatus = function () {
        return $localStorage.authStatus;
    };

    return {
        register: register,
        login: login,
        logout: logout,
        getStatus: getStatus
    };
})

.service("servicesService", function ($q, $http) {

    var getAllServices = function () {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/service", {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
            deferred.resolve(responce);
        }).error(function (error) {
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    var getSpareParts = function (id) {
        var deferred = $q.defer();
        var url = apiBaseUri + "/service/" + id + "/spareparts";
        $http.get(url, {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
            deferred.resolve(responce);
        }).error(function (error) {
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    var getService = function (serviceId) {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/service/" + serviceId, {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
            deferred.resolve(responce);
        }).error(function (error) {
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    var submitPost = function (post, serviceId) {
        var obj = {};
        obj.value = post;
        obj.serviceId = serviceId;

        var deferred = $q.defer();
        debugger
        $http.post(apiBaseUri + "/service/comment", obj, {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
        debugger
            deferred.resolve(responce);
        }).error(function (error) {
        debugger
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    return {
        getAllServices: getAllServices,
        getSpareParts: getSpareParts,
        getService: getService,
        submitPost: submitPost
    };
})

.service('officeService', ['$q', '$http', function($q, $http) {
      var getAll = function() {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/office", {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      var getMechanics = function(officeId, serviceId) {
        var deferred = $q.defer();
        var url = apiBaseUri + "/office/" + officeId + "/mechanics?servceId=" + serviceId;
        $http.get(url, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      return {
        getAll: getAll,
        getMechanics: getMechanics
      };
    }
])

.service('carService', ['$q', '$http', function($q, $http) {
      var getBrandsAndModels = function() {
        /*var url = window.location.origin + "/static/cars.json";
        var deferred = $q.defer();
        $http.get(url, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;*/
          return cars;
      };

      var getYears = function() {
        var years = [2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960];
        return years;
      };

      var getAll = function() {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/car", {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      var create = function(car) {
        var deferred = $q.defer();
        $http.post(apiBaseUri + "/car", car, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      var remove = function(carId) {
        var deferred = $q.defer();
        $http.delete(apiBaseUri + "/car/" + carId, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      return {
        getBrandsAndModels: getBrandsAndModels,
        getYears: getYears,
        getAll: getAll,
        create: create,
        remove: remove
      };
    }
])


.service('mechanicsordersService', ['$q', '$localStorage', '$http', function($q, $localStorage, $http) {
      var getOrders = function (date) {
        var deferred = $q.defer();
        var url = apiBaseUri + "/order?date=" + date.toISOString();
        $http.get(url, {
          headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
          deferred.resolve(responce);
        }).error(function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      };

      return {
        getOrders: getOrders
      }
    }
])

.service('orderService', ['$q', '$localStorage', '$http', function ($q, $localStorage, $http) {
        var getTime = function (officeId, serviceId, mechanicId, date) {
            var deferred = $q.defer();
            var url = apiBaseUri + "/order/time?" + "officeId=" + officeId + "&serviceId=" + serviceId + "&date=" + date.toISOString();
            if (mechanicId != null) {
                url += "&mechanicId=" + mechanicId;
            }
            $http.get(url, {
                headers: { 'Content-Type': "application/json" }
            }).success(function (responce) {
                deferred.resolve(responce);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        var creatOrderSet = function (set) {
            var deferred = $q.defer();
            $http.post(apiBaseUri + "/order", set, {
                headers: { 'Content-Type': "application/json" }
            }).success(function (responce) {
                deferred.resolve(responce);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        return {
            getTime: getTime,
            creatOrderSet: creatOrderSet
        }
    }
]);