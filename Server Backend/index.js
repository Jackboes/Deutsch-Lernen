import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import travelVocab from "./Vocabulary-Data-Level-One/resien.js";
import foodDrink from "./Vocabulary-Data-Level-One/food.js";
import shopping from "./Vocabulary-Data-Level-One/shop.js";
import transportCity from "./Vocabulary-Data-Level-One/transport.js";
import workProfessions from "./Vocabulary-Data-Level-One/work.js";
import schoolUni from "./Vocabulary-Data-Level-One/school.js";
import famRelation from "./Vocabulary-Data-Level-One/family.js";
import homeHold from "./Vocabulary-Data-Level-One/house.js";
import personalInfo from "./Vocabulary-Data-Level-One/personal.js";
import personalInfoTwo from "./Vocabulary-Data-Level-Two/personalInfo-level-two.js";
import familyRelations from "./Vocabulary-Data-Level-Two/familyRelation-level-two.js";
import houseHold from "./Vocabulary-Data-Level-Two/houseHold-level-two.js";
import foodDrinks from "./Vocabulary-Data-Level-Two/foodDrinks-level-two.js";
import shoppingClothes from "./Vocabulary-Data-Level-Two/shopping-level-two.js";
import travelVaccation from "./Vocabulary-Data-Level-Two/travelVacc-level-two.js";
import { title } from "process";



const __dirname = dirname(fileURLToPath(import.meta.url));

const deutLern = express();
const port = 3000;

deutLern.set("view engine", "ejs");
// Here view engine tell the express that I ma using ejs template and look into the views folder for the ejs files when the I use res.render()
deutLern.set("views", join(__dirname, "views"));

deutLern.use(express.static(join(__dirname, "public")));

deutLern.get("/index", (req, res) => {
    res.render("index",{title: "Deutsch Lernen", pageCss: "home.css", pageJs: "index.js"});
});

deutLern.get("/about", (req, res) => {
    res.render("about", { title: "About Us", pageCss: "about.css", pageJs: "about.js" }, (err, html) => {
        if (err) {
            console.error("EJS RENDER ERROR:", err);
            return res.status(500).send("<pre>" + err.stack + "</pre>");
        }
        res.send(html);
    });
});


deutLern.get("/sign-up",(req,res)=>{
    res.render("sign-up",{title: "Sign-Up", pageCss: "sign.css", pageJs: "sign-up.js"});
});


deutLern.get("/login",(req,res)=>{
    res.render("login",{title: "Login",pageCSS:"login.css",pageJs:"login.js"});
});


        // This is the vocabulary section and the cards which contain different topics vocabulary

deutLern.get("/vocabulary",(req,res)=>{
    res.render("vocabulary",{title:"Vocabulary",pageCss:"vocab.css",pageJs:"vocab.js"});
});


// #1 Personal Information Vocabulary
deutLern.get("/personalInfo",(req,res)=>{
    res.render("VocabularyCardContent/personalInfo",{vocabulary: personalInfo,title:"Personal Information", vocabJs: "personal.js", pageJs:"vocard.js"});
});

// #2 Family & Relationships Vocabulary
deutLern.get("/famRelation",(req,res)=>{
    res.render("VocabularyCardContent/famRelation",{vocabulary: famRelation,title:"Family & Relationships", vocabJs: "family.js", pageJs:"vocard.js"});
});

// #3 House & House Hold Vocabulary
deutLern.get("/houseHold",(req,res)=>{
    res.render("VocabularyCardContent/houseHold",{vocabulary: homeHold,title:"Home & Household", vocabJs: "house.js", pageJs:"vocard.js"});
});


// #4 Food and Drinks Vocabualary
    
deutLern.get("/food",(req,res)=>{
    res.render("VocabularyCardContent/food",{ vocabulary: foodDrink,title:"Food & Drinks Vocabulary", vocabJs: "food-drinks.js", pageJs:"vocard.js"});
   
});


// #5 Shopping & Clothes Card Data Logic
deutLern.get("/shopping",(req,res)=>{
    res.render("VocabularyCardContent/shopping",{ vocabulary: shopping,title:"Shopping & Clothes Vocabulary", vocabJs: "shop.js", pageJs:"vocard.js"});
});


// #6 Travel Vocabulary Card Data Logic
deutLern.get("/travel",(req,res)=>{
    res.render("VocabularyCardContent/travel",{ vocabulary: travelVocab,title:"Travel Vocabulary", vocabJs: "reisen.js", pageJs:"vocard.js"});
   
});


// #7 Transport & City
deutLern.get("/transport",(req,res)=>{
    res.render("VocabularyCardContent/transport",{ vocabulary: transportCity,title:"Transport & city Vocabulary", vocabJs: "transport.js", pageJs:"vocard.js"});
   
});
 
// #8 Work and Professions Vocabulary
deutLern.get("/workProf",(req,res)=>{
    res.render("VocabularyCardContent/workProf",{vocabulary: workProfessions,title:"Work & Professions Vocabulary", vocabJs: "work.js", pageJs:"vocard.js"});
});

// #9 School & university Vocabulary
deutLern.get("/schoolUni",(req,res)=>{
    res.render("VocabularyCardContent/schoolUni",{vocabulary: schoolUni,title:"School & University Vocabulary", vocabJs: "school.js", pageJs:"vocard.js"});
});






                // A2 Level Vocabulary
deutLern.get("/vocabulary/a2",(req,res)=>{
    res.render("A2Level");
});

// #1 Personal Information
deutLern.get("/personalInfo-a2",(req,res)=>{
    res.render("VocabularyCardLevelTwo/personalInfo",
        {vocabulary: personalInfoTwo, title: "Personal Information",vocabJs: "personalInfo-level-two.js",pageJs: "vocard.js"}
    );
});

// #2 Family & Relationships
deutLern.get("/familyRelations-a2",(req,res)=>{
    res.render("VocabularyCardLevelTwo/familyRelation",
        {vocabulary:familyRelations, title:"Family & Relationships",vocabJs:"familyRelation-level-two.js",pageJs:"vocard.js"}
    );
});

// #3 House & Household
deutLern.get("/houseHold-a2",(req,res)=>{
    res.render("VocabularyCardLevelTwo/houseHold",
        {vocabulary:houseHold, title:"House & Household",vocabJs:"houseHold-level-two.js",pageJs:"vocard.js"}
    );
});

// #4 Food & Drinks
deutLern.get("/foodDrinks-a2",(req,res)=>{
    res.render("VocabularyCardLevelTwo/foodDrinks",
        {vocabulary:foodDrinks, title:"Food & Drinks",vocabJs:"foodDrinks-level-two.js",pageJs:"vocard.js"}
    );
});


// #5 Shopping
deutLern.get("/shoppingClothes-a2",(req,res)=>{
    res.render("VocabularyCardLevelTwo/shopping",
        {vocabulary:shoppingClothes, title:"Shopping & Clothes",vocabJs:"shopping-level-two.js",pageJs:"vocard.js"}
    );
});


// #6 Travel Vaccation
deutLern.get("/travelVaccation-a2",(req,res)=>{
    res.render("VocabularyCardLevelTwo/travel",
        {vocabulary:travelVaccation, title:"Travel & Vaccaction",vocabJs:"travelVacc-level-two.js",pageJs:"vocard.js"}
    );
});


deutLern.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
