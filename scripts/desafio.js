function tempo(tempo, graus) {
    console.log(tempo);
    console.log(graus);

    if(tempo === 'rain'){
        estaChovendo('está chovendo');
        pok('electric');
    }else if(graus < 5){
        pok('ice');
    }else if(graus >= 5 && graus < 10){
        pok('water');
    }else if(graus >= 10 && graus < 12){
        pok('normal');
    }else if(graus >= 12 && graus < 15){
        pok('grass');
    }else if(graus >= 15 && graus < 21){
        pok('ground');
    }else if(graus >= 21 && graus < 23){
        pok('normal');
    }else if(graus >= 23 && graus < 27){
        pok('bug');
    }else if(graus >= 27 && graus < 33){
        pok('rock');
    }else if(graus > 33){
        pok('fire');
    }
}