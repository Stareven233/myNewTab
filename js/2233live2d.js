// 白猫
// https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json
// 黑猫
// https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json
// bilibili 33
// https://raw.githubusercontent.com/Stareven233/static/master/live2d/Bilibili2233/haruna/33/model.2018.bls-winter.json

function rand_choice(arr) {
    return arr[Math.round(Math.random()*(arr.length-1))];
}

let haruna_basedir = "https://raw.githubusercontent.com/Stareven233/static/master/live2d/Bilibili2233/haruna/"
let haruna = ["22", "33"];
let closet_list = ['model.2016.xmas.1.json', 'model.2016.xmas.2.json', 'model.2017.cba-normal.json', 'model.2017.cba-super.json', 'model.2017.newyear.json', 'model.2017.school.json', 'model.2017.summer.normal.1.json', 'model.2017.summer.normal.2.json', 'model.2017.summer.super.1.json', 'model.2017.summer.super.2.json', 'model.2017.tomo-bukatsu.high.json', 'model.2017.tomo-bukatsu.low.json', 'model.2017.valley.json', 'model.2017.vdays.json', 'model.2018.bls-summer.json', 'model.2018.bls-winter.json', 'model.2018.lover.json', 'model.2018.spring.json', 'model.default.json'];
let model_path = haruna_basedir;
model_path += rand_choice(haruna) + '/' + rand_choice(closet_list);
// console.log(model_path);

L2Dwidget.init({
    "model": {
        "jsonPath": model_path,
        "scale": 1 
    }, 
    "display": { 
        "position": "right", 
        "width": 120, 
        "height": 160,
    　 "hOffset": 0, 
        "vOffset": 70
    }, 
    "mobile": { 
        "show": true, 
        "scale": 0.5 
    },
    　"react": { 
        "opacityDefault": 1, 
        "opacityOnHover": 0.2 
    } 
});
