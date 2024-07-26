/*const jsObj = { comment: "This is a test comment"};
const convertedJSONString = JSON.stringify(jsObj);
localStorage.setItem("comment",convertedJSONString); */
//local Storage မှာ String အနေနဲ့ပဲသိမ်းလို့ရ
/* object ကို string အနေနဲ့ ပြောင်းလို့ရတာ JSON ဆိုတဲ့ obj ကို သုံးပြီး သူ့မှာပါလာတဲ့ Method ကို သုံးလို့ရ */
//  Valid JSON values (string, number, json object, array, boolean, null)

/*const city = {
    name: "Yangon",
    population: "6 millions",
    region: "Asia",
    isCapital: false,
};

const convertedJSONString = JSON.stringify(city); // JSON String ကို return ထုတ်ပေး
localStorage.setItem("city", convertedJSONString); //Local Storage မှာ သိမ်း

const cityFromLocalStorage = localStorage.getItem("city"); //Save ထားတာကို Local Storage ကနေ ပြန်ထုတ်ချင်ရင်သုံး
console.log("cityFromLocalStorage: ", cityFromLocalStorage.length);

const cityAsJSObj = JSON.parse(cityFromLocalStorage); //JSON String ကနေ JS Object ပြန်ပြောင်း
console.log("cityAsJSObj: ", cityAsJSObj);

*/

const cities = [
    {
    name: "Yangon",
    population: "6 millions",
    region: "Asia",
    isCapital: false,
},
{
    name: "NayPyiTaw",
    population: "1 millions",
    region: "Asia",
    isCapital: false,
},
];

const convertedJSONString = JSON.stringify(cities); // JSON String ကို return ထုတ်ပေး / JS Obj ကနေ JSON String ပြောင်းတာကို serialization
localStorage.setItem("cities", convertedJSONString); //Local Storage မှာ သိမ်း

const cityFromLocalStorage = localStorage.getItem("cities"); //Save ထားတာကို Local Storage ကနေ ပြန်ထုတ်ချင်ရင်သုံး
console.log("cityFromLocalStorage: ", cityFromLocalStorage.length);

const cityAsJSArray = JSON.parse(cityFromLocalStorage); //JSON String ကနေ JS Object ပြန်ပြောင်း / JSON String ကနေ JS Obj ပြောင်းတာကို deserialization
console.log("cityAsJSArray: ", cityAsJSArray);

//JS data type --> json string = serialization
//json string --> js data type = deserialization