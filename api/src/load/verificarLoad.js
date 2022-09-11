const verificar = (capital) => {
    let verificarCap = capital;
    
    if (verificarCap){
        return (capital[0]);
    }else{
        return ("No tiene capital");
    }
}
const verificarSub = (subregion) => {
    let verificarSub = subregion;

    if (verificarSub){
        return (subregion);
    }else{
        return ("No tiene region");
    }
}
module.exports = {
    verificar,
    verificarSub
}