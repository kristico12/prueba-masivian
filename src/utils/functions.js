function ramdomIntergerNumberGenerate(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
export {
    ramdomIntergerNumberGenerate
}