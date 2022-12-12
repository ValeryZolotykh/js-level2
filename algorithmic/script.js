let svgFile = "48.31,35.08,Днепр,1001094\n50.45,30.52,Киев,2868702\n50.02,36.14,Харьков,1451132\n46.49,36.58,Луганск,424113\n47.53,35.23,Запорожье,766268\n#wuiwhf\n\n46.58,32.12,Николаев,494922\n48.03,37.47,Донецк,949825\n49.53,24.16,Львов,729038\n47.07,37.40,Мариуполь,458533\n46.29,30.44,Одесса,1017022\n49.15,28.41,Винница,372116\n47.54,33.33,Кривой Рог,652137\n";

function parsingSvg(svg) {
    let svgData = svg
        .split('\n')
        .filter(element => !element.includes("#"))
        .filter(element => element.trim() != "")
        .map((element => {
            let elements = element.split(",")
            return { x: parseFloat(elements[0]), y: parseFloat(elements[1]), city: elements[2], population: parseInt(elements[3]) };
        }))
        .sort((a, b) => b.population - a.population)
        .splice(0, 10)
        .reduce((obj, item, count) => (obj[item.city] = { population: item.population, rating: ++count }, obj), {})

    return (anytext) => {
        let cities = Object.keys(svgData);
        cities.forEach((city) => {
            if (anytext.includes(city)) {
                anytext = anytext.replace(city, city + " (" + svgData[city].rating + " место в топ-10 крупных городов Украины, население " + svgData[city].population + " человек)");
            }
        })
        return anytext;
    };
}

console.log(parsingSvg(svgFile)("Киев це саме те"));
console.log(parsingSvg(svgFile)("Харьков це саме те"));
console.log(parsingSvg(svgFile)("Одесса це саме те"));
console.log(parsingSvg(svgFile)("Днепр це саме те"));
console.log(parsingSvg(svgFile)("Донецк це саме те"));
console.log(parsingSvg(svgFile)("Запорожье це саме те"));
console.log(parsingSvg(svgFile)("Львов це саме те"));
console.log(parsingSvg(svgFile)("Кривой Рог це саме те"));
console.log(parsingSvg(svgFile)("Николаев це саме те"));
console.log(parsingSvg(svgFile)("Мариуполь це саме те"));
console.log(parsingSvg(svgFile)("Луганск це саме те"));