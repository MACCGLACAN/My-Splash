const nigeriaStates = {
    Abia: "Umuahia",
    Adamawa: "Yola",
    AkwaIbom: "Uyo",
    Anambra: "Awka",
    Bauchi: "Bauchi",
    Bayelsa: "Yenagoa",
    Benue: "Makurdi",
    Borno: "Maiduguri",
    CrossRiver: "Calabar",
    Delta: "Asaba",
    Ebonyi: "Abakaliki",
    Edo: "Benin City",
    Ekiti: "Ado-Ekiti",
    Enugu: "Enugu",
    Gombe: "Gombe",
    Imo: "Owerri",
    Jigawa: "Dutse",
    Kaduna: "Kaduna",
    Kano: "Kano",
    Katsina: "Katsina",
    Kebbi: "Birnin Kebbi",
    Kogi: "Lokoja",
    Kwara: "Ilorin",
    Lagos: "Ikeja",
    Nasarawa: "Lafia",
    Niger: "Minna",
    Ogun: "Abeokuta",
    Ondo: "Akure",
    Osun: "Oshogbo",
    Oyo: "Ibadan",
    Plateau: "Jos",
    Rivers: "Port Harcourt",
    Sokoto: "Sokoto",
    Taraba: "Jalingo",
    Yobe: "Damaturu",
    Zamfara: "Gusau"
};

console.log(nigeriaStates.Lagos);
console.log(nigeriaStates.Kano);
console.log(nigeriaStates.Enugu);
console.log(nigeriaStates.Rivers);

let a = 2;
let b = 2;

sum = a + b;
console.log('Sum =', sum);

minus = a - b;
console.log('Difference = ', minus)

times = a * b;
console.log('Multiplication = ', times)

divide = a / b;
console.log('Quotient = ', divide)

const btn = document.getElementById("myButton")
btn.addEventListener("click", function(){
    alert("Button Clicked");
    btn.innerText = "Button Clicked"
})



