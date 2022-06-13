/**
 * 1) svg
 * 1.1) styling svg + hover effects
 * 1.2) events svg click
 * 1.3) alerting info on click
 * 2) zooming with transform and transition
 * 2.1) + - buttons, native zoom
 * 2.2) css transform property, scale
 * 3) modal + backdrop
 * const modalEle = showModal(contentEle)
 * 4) svg click - show modal about region in modal
 */

const dictionary = {
    Crimea: {
        population: '1500000',
        center: 'Simferopol',
        square: '27000',
        name: 'Autonomous Republic of Crimea'
    },
    Mykolayiv: {
        population: '1141324',
        center: 'Mykolaiv',
        square: '24598',
        name: "Mykolaiv Oblast"
    },
    Chernihiv: {
        population: '991294',
        center: 'Chernihiv',
        square: '31903',
        name: 'Chernihiv Oblast'
    },
    Rivne: {
        population: '1153000',
        center: 'Rivne',
        square: '20051',
        name: 'Rivne Oblast'
    },
    Chernivtsi: {
        population: '901632',
        center: 'Chernivtsi',
        square: '8100',
        name: 'Chernivtsi Oblast'
    },
    "Ivano-Frankivs'k": {
        population: '1368000',
        center: "Ivano-Frankivs'k",
        square: '13928',
        name: "Ivano-Frankivs'k Oblast"
    },
    "Khmel'nyts'kyy": {
        population: '1264000',
        center: "Khmel'nyts'kyy",
        square: '20645',
        name: "Khmel'nyts'kyy Oblast"
    },
    "L'viv": {
        population: '2512000',
        center: 'Lviv',
        square: '21831',
        name: "Lviv Oblast"
    },
    Ternopil: {
        population: '1039000',
        center: 'Ternopil',
        square: '13823',
        name: 'Ternopil Oblast'
    },
    Transcarpathia: {
        population: '1258155',
        center: 'Uzhgorod',
        square: '12753',
        name: "Zakarpattya Oblast"
    },
    Volyn: {
        population: '1031000',
        center: 'Lutsk',
        square: '20143',
        name: "Volyn Oblast"
    },
    Cherkasy: {
        population: '1220363',
        center: 'Cherkasy',
        square: '20916',
        name: "Cherkasy Oblast"
    },
    Kirovohrad: {
        population: '933109',
        center: 'Kropyvnytskyi',
        square: '24588',
        name: "Kirovograd Oblast"
    },
    Kiev: {
        population: '1781000',
        center: 'Kyiv',
        square: '28121',
        name: "Kyiv Oblast"
    },
    Odessa: {
        population: '2351392',
        center: 'Odessa',
        square: '33310',
        name: "Odessa Oblast"
    },
     Vinnytsya: {
        population: '1575808',
        center: 'Vinnytsya',
        square: '26513',
        name: "Vinnytsya Oblast"
    },
    Zhytomyr: {
        population: '1208000',
        center: 'Zhytomyr',
        square: '29827',
        name: 'Zhytomyr'
    },
    Sumy: {
        population: '1068000',
        center: 'Sumy',
        square: '23832',
        name: 'Sumy Oblast'
    },
    "Dnipropetrovs'k": {
        population: '3177000',
        center: 'Dnipro',
        square: '31923',
        name: "Dnipropetrovs'k Obkast"
    },
    "Donets'k": {
        population: '4123000',
        center: "Donets'k",
        square: '26517',
        name: "Donets'k Oblast"
    },
    "Luhans'k": {
        population: '2167802',
        center: "Luhans'k",
        square: '26684',
        name: "Luhans'k Oblast"
    },
    Poltava: {
        population: '1387000',
        center: 'Poltava',
        square: '28750',
        name: 'Poltava Oblast'
    },
    Zaporizhzhya: {
        population: '1687000',
        center: 'Zaporizhzhya',
        square: '27183',
        name: 'Zaporizhzhya Oblast'
    },
    "Kiev City": {
        population: '2954300',
        center: 'Kyiv',
        square: '835',
        name: "Kyiv"
    },
    Kherson: {
        population: '1028000',
        center: 'Kherson',
        square: '28461',
        name: 'Kherson Oblast'
    },
    Sevastopol: {
        population: '340735',
        center: 'Sevastopol',
        square: '864',
        name: "Sevastopol"
    },
};