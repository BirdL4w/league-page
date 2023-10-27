/*   STEP 1   */
export const leagueID = "921875357295362048/"; // your league ID
export const leagueName = "Die Old Dy-Nasty"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p> K_tabs can enter some text here if he would like:</p>
  <p> Could be a league overview </p>
  <p> Could do a commissioners letter</p>
  <p> Whatever you desire</p>
  <p></p>
  <p></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "ManagerID": "374720008565272576",
      "name": "Mark Macaulay",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Somewhere, Minnesota", // (optional)
      "bio": "TDs Bio Section",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Silent Ghosts", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "ManagerID": "432275981131063296",
      "name": "Kyle Tabatt",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Chicago, IL", // (optional)
      "bio": "Kyle Bio Here",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Brewcifer", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Dominate",
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "ManagerID": "711358433823137792",
      "name": "Ben Deters",
      "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "St. Cloud, MN", // (optional)
      "bio": "D style Bio here",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 6, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "ManagerID": "462858467019845632",
      "name": "Shaun Maloney",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Rochester, MN", // (optional)
      "bio": "Big Dog Bio Here",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Villains", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 5, // 1 - 10
   //    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "458849508160172032",
   //    "name": "Benjamin Ford",
   //    "tookOver": Null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "Fridley, MN", // (optional)
   //    "bio": "Ass Ass Ass Ass..",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Smoke Frogs", // Can be anything (usually your rival's name)
   //      link: null, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 6, // 1 - 10
   //    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "432343560306561024",
   //    "name": "Tom Zirbes",
   //    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "St. Cloud, MN", // (optional)
   //    "bio": "One in the pink, one in the stink.",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Rival", // Can be anything (usually your rival's name)
   //      link: 6, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 7, // 1 - 10
   //    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "439946464701968384",
   //    "name": "Isaac Schreiber",
   //    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "Somewhere in Texas?", // (optional)
   //    "bio": "Lorem ipsum...",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Rival", // Can be anything (usually your rival's name)
   //      link: 6, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 5, // 1 - 10
   //    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "432391013219176448",
   //    "name": "David Konnight",
   //    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "Brooklyn", // (optional)
   //    "bio": "Lorem ipsum...",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Rival", // Can be anything (usually your rival's name)
   //      link: 6, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 10, // 1 - 10
   //    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "433012572170481664",
   //    "name": "Andy Borgerding",
   //    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "Sauk Centre, MN", // (optional)
   //    "bio": "Andy Bio here",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Rival", // Can be anything (usually your rival's name)
   //      link: null, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 10, // 1 - 10
   //    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "76755193509068800",
   //    "name": "Garrett Nguyen-Julson",
   //    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "Saint Paul, MN", // (optional)
   //    "bio": "Why don't we go toe-to-toe on Bird Law and see who comes out the victor...",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Smoke Frogs", // Can be anything (usually your rival's name)
   //      link: 12, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 7, // 1 - 10
   //    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "475337676715716608",
   //    "name": "Cortlan Johnston",
   //    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "IDK St Cloud?", // (optional)
   //    "bio": "bio",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Rival", // Can be anything (usually your rival's name)
   //      link: 6, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 6, // 1 - 10
   //    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
   // {
   //    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
   //   "ManagerID": "459497044399091712",
   //    "name": "Jeremy Thompson",
   //    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
   //    "location": "Champlain, MN", // (optional)
   //    "bio": "....",
   //    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
   //    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
   //    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   //    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
   //    "rival": {
   //      name: "Bird Law Academy", // Can be anything (usually your rival's name)
   //      link: 10, // manager array number within this array, or null to link back to all managers page
   //      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
   //    },
   //    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
   //    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
   //    "philosophy": "Your fantasy team's philosophy",
   //    "tradingScale": 8, // 1 - 10
   //    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
   //  },
  
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
