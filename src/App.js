import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/card';
// import Binding from './components/binding';
import BindingStyles from './components/bindingStyles'
import TemplateStyle from './components/templateStyle'
import flatten from "./utils/flatten";

let card_template_data = {
    "height": 504,
    "width": 360,
    "id": 1,
    "border-width": "10px",
    "border-color": "#000000",
    "border-radius": "25",
    "bindings": [
        {
            "name": "Title",
            "type": "text",
            "x": 80,
            "y": 40,
            "font-size": "24px",
            "width": 200,
            "height": 80,
            "font": "Arial",
            "column-index": 0,
            "align": "center",
            "font-weight": "bold",
            "id": 1
        },
        {
            "name": "Body",
            "type": "text",
            "x": 40,
            "y": 140,
            "font-size": "16px",
            "width": 280,
            "height": 344,
            "font": "Arial",
            "column-index": 6,
            "align": "left",
            "id": 2
        },
        {
            "name": "Cost",
            "type": "text",
            "x": 40,
            "y": 400,
            "font-size": "32px",
            "width": 40,
            "height": 40,
            "font": "Arial",
            "column-index": 3,
            "align": "center",
            "font-weight": "bold",
            "id": 5
        },
        {
            "name": "Card Type",
            "type": "text",
            "x": 80,
            "y": 100,
            "font-size": "12px",
            "width": 200,
            "height": 30,
            "font": "Arial",
            "column-index": 2,
            "align": "center",
            "id": 12
        }
    ],
    "flags": [
        {
            "id": 3,
            "name": "If type is recruit",
            "columnIndex": 2,
            "expectedValue": "Recruit",
            "comparisonOperator": "==",
            "bindings": [
                {
                    "name": "Wages",
                    "type": "text",
                    "x": 40,
                    "y": 40,
                    "font-size": "32px",
                    "width": 40,
                    "height": 40,
                    "font": "Arial",
                    "column-index": 4,
                    "align": "center",
                    "font-weight": "bold",
                    "id": 4
                },
                {
                    "name": "Influence",
                    "type": "text",
                    "x": 280,
                    "y": 40,
                    "font-size": "32px",
                    "width": 40,
                    "height": 40,
                    "font": "Arial",
                    "column-index": 5,
                    "align": "center",
                    "font-weight": "bold",
                    "id": 6
                }
            ],
            "flags": [
                {
                    "id": 7,
                    "name": "If recruit is neutral",
                    "columnIndex": 1,
                    "expectedValue": "Neutral",
                    "comparisonOperator": "==",
                    "bindings": [
                        {
                            "name": "Neutral Recruit Background",
                            "type": "image",
                            "x": 0,
                            "y": 0,
                            "width": 360,
                            "height": 504,
                            "column-index": null,
                            "value": "https://i.snag.gy/wFKe75.jpg",
                            "fill-style": "stretch",
                            "id": 8
                        },
                    ],
                    "flags": []
                },
                {
                    "id": 9,
                    "name": "If recruit is incumbent",
                    "columnIndex": 1,
                    "expectedValue": "Incumbent",
                    "comparisonOperator": "==",
                    "bindings": [
                        {
                            "name": "Incumbent Recruit Background",
                            "type": "image",
                            "x": 0,
                            "y": 0,
                            "width": 360,
                            "height": 504,
                            "column-index": null,
                            "value": "https://snag.gy/8bTBKG.jpg",
                            "fill-style": "stretch",
                            "id": 10
                        }
                    ],
                    "flags": []
                },
                {
                    "id": 10,
                    "name": "If recruit is People",
                    "columnIndex": 1,
                    "expectedValue": "People",
                    "comparisonOperator": "==",
                    "bindings": [
                        {
                            "name": "People Recruit Background",
                            "type": "image",
                            "x": 0,
                            "y": 0,
                            "width": 360,
                            "height": 504,
                            "column-index": null,
                            "value": "https://snag.gy/rabxC6.jpg",
                            "fill-style": "stretch",
                            "id": 11
                        }
                    ],
                    "flags": []
                }
            ]
        },
    ]
};

// let card_column_data = [
//     [
//         "Card Title 1",
//         "Neutral",
//         "Recruit",
//         "3",
//         "1",
//         "2",
//         "card body 1 card body 1 card body 1 card body 1 card body 1 card body 1"
//     ],
//     [
//         "Card Title 2",
//         "Incumbent",
//         "Recruit",
//         "1",
//         "2",
//         "3",
//         "card body 2 card body 2 card body 2 card body 2 card body 2 card body 2"
//     ],
//     [
//         "Card Title 2",
//         "People",
//         "Recruit",
//         "1",
//         "2",
//         "3",
//         "card body 2 card body 2 card body 2 card body 2 card body 2 card body 2"
//     ],
//     [
//         "Card Title 3",
//         "People",
//         "Event",
//         "1",
//         null,
//         null,
//         "card body 3 card body 3 card body 3 card body 3 card body 3 card body 3 "
//     ]
// ];

let card_column_data = [["Involuntary Donation","Family","Event",0,"-","-","When you play this card or use it to pay a cost, move a recruit."],["This is Our Turf","Family","Event",3,"-","-","Move up to 3 recruits (yours or your opponents)"],["Get Outta Here","Family","Event",4,"-","-","Move an opponent's recruit and exhaust it."],["Income Subsidies","Family","Event",1,"-","-","Reduce the wages of ALL recruits in District A by 1."],["Calling In Favors","Family","Event",0,"-","-","Draw a card for each recruit in District A."],["Annie Johnson","Family","Recruit",2,0,-2,"The play cost of recruits into adjacent districts is reduced by 2 cards."],["Mark James","Family","Recruit",2,0,-2,"Before your wages phase, gain $1 for each recruit in adjacent districts."],["Sharon Wall","Family","Recruit",3,0,-2,"Your other recruits in adjacent districts have +1 influence."],["Trevor Jackson","Family","Recruit",2,1,1,"When played, you may move a friendly recruit into this district."],["Fausta Baresi","Family","Recruit",5,1,4,"Ms. Baresi's play cost is reduced by 2 if played into District A."],["Vinnie Dattaglia","Family","Recruit",3,2,2,"When you play Mr. Dattaglia, draw a card for each friendly recruit in District A."],["Quintino Marcelo","Family","Recruit",3,3,3,"Mr. Martino has +3 influence in District A"],["Durante Genovisi","Family","Recruit",2,4,4,"Mr. Durante's wages are reduced by $2 in District A."],["Sal Fontana","Family","Recruit",5,5,0,"This district counts as District A for the purpose of card abilities.","Not good enough for the cost, also not interesting enough."],["Sally Buchanan","Family","Recruit",4,1,1,"When you play Ms. Buchanan, move all recruits in this district to adjacent districts."],["Urban Incentives","Family","Resource",2,"-","-","No recruit's influence can be below 0."],["Housing Subsidies","Family","Resource",4,"-","-","When your turn begins, gain $1 for each of your recruits in District A."],["Flamingo Hotel","Family","District",1,2,"-","If your opponent has 3 or more recruits in this district, this card provides no income or card draw."],["The Mattresses","Family","District","-","-","-","When you dominate this district, move up to three recruits from this district to another."],["Nightclub","Family","District","-",0,"-","+$1 income for each recruit  with negative influence in this district"],["Incumbent","Event",0,"-","-","When you play this card or use it to pay a cost, increase a recruit's wages by 1."],["Payroll Taxes","Incumbent","Event",1,"-","-","Choose an opponent's recruit. Your opponent must pay its wages, if able. If he or she cannot, discard the recruit."],["Road Block","Incumbent","Event",2,"-","-","Choose a district. Until your next turn, as an additional cost to play recruits in that district, your opponent must pay 3 cards and $1."],["Half Mast","Incumbent","Event",2,"-","-","Your opponent's recruits have -1 influence until your next action phase."],["Unscheduled Maintenance","Incumbent","Event",3,"-","-","Choose a district. Exhaust all recruits in that district."],["Jury Duty","Incumbent","Event",0,"-","-","Draw cards equal to the wages of an opponent's recruit."],["Ted Swenson","Incumbent","Recruit",2,1,1,"Whenever your opponent plays a recruit in this district, draw a card."],["Randy Waters","Incumbent","Recruit",3,1,1,"When you play Mr. Waters, exhaust an opponent's recruit in this district."],["Officer Herbert Wellesley","Incumbent","Recruit",3,2,2,"Wages for your opponent's recruits in this district are increased by 1."],["Bobi Stewart","Incumbent","Recruit",4,2,2,"Whenever a recruit is played into this district (not including Ms. Stewart), exhaust it."],["Bob Sanchez","Incumbent","Recruit",2,3,1,"Each recruit in this district has 1 influence."],["Hon. Sarah Christensen","Incumbent","Recruit",3,3,2,"When played, pick an opponent's recruit in this district. Its wages are increased by $3."],["Tyler Black","Incumbent","Recruit","X",1,1,"When you play Mr. Black, increase the wages of an opposing recruit in this district by X."],["DA Johnny McPherson","Incumbent","Recruit",3,4,3,"Whenever your opponent pays wages for a recruit in this district, gain $1."],["Big Mike Washington","Incumbent","Recruit",4,4,3,"Mr. Washington's play cost and wages are reduced by 1 for each opponent's recruit in this district."],["Tax Office","Incumbent","Resource",4,"-","-","@: Both players lose $1, if able."],["Income Taxes","Incumbent","Resource",4,"-","-","When your turn begins, gain money equal to the wages of your opponent's most expensive recruit."],["Code Enforcement Office","Incumbent","District","-","-","-","When your opponent plays or moves a recruit into this district, draw three cards."],["Town Hall","Incumbent","District","-",1,"-","Wages for recruits in this district are increased by 1."],["Police Station","Incumbent","District","-","-","-","When your opponent plays or moves a recruit into this district, you may pay $1 to exhaust it."],["Press","Event",0,"-","-","When you play this card or use it to pay a cost, reduce a recruit's influence by 1."],["Deadlines","Press","Event",0,"-","-","Give a friendly recruit +3 influence until your next action phase. Then, give that recruit -5 influence."],["Blackmail","Press","Event",1,"-","-","Choose an opponent's recruit. Until your next action phase, it has 0 influence."],["Rumor Mill","Press","Event",2,"-","-","Attach this card to an opponent's recruit. At the end of each of your turns, reduce that recruit's influence by 1."],["Debate","Press","Event",2,"-","-","Pick a district. Discard each player's highest-influence recruit in that district."],["Headlines","Press","Event",2,"-","-","Remove all influence modifiers from a recruit."],["Red Lines","Press","Event",3,"-","-","Move all influence modifiers from any recruit to another."],["Voter Confusion","Press","Event",2,"-","-","Choose a district. Until your next action phase, neither player can gain control of that area."],["Spotlight","Press","Event",2,"-","-","Choose a district. Until your next action phase, when comparing for control, only count each player's highest-influence recruit."],["Rod Stinson","Press","Recruit",2,1,0,"Mr. Stinson has +3 influence on your opponent's turn."],["Stan Hartvigsen","Press","Recruit",2,2,1,"Opponent's recruits in this district have -1 influence"],["Harry Walker","Press","Recruit",2,3,"X","Mr. Walker's influence is equal to your opponent's highest-influence recruit in this district."],["Sid Jacobs","Press","Recruit",3,2,1,"Mr. Jacobs' influence is increased by 1 for each opposing recruit in this district."],["Frida Stone","Press","Recruit",3,1,1,"When your opponent puts a recruit in this district, exhaust it and Ms. Stone. "],["Reggie Steinbeck","Press","Recruit",5,1,1,"When you play Mr. Steinbeck, exhaust ALL recruits in this district."],["Vivian Cheng","Press","Recruit",4,3,3,"At the end of your turn, place a -1 influence counter on ALL recruits in this district. If Ms. Cheng's influence is ever 0 or less, discard her."],["Ted Lions","Press","Recruit",3,2,5,"When played, put 4 -1 influence counters on Mr. Lions."],["The Morning Edition","Press","Resource",4,"-","-","When your turn begins, gain $1 for each recruit with at least one influence modifier token on it."],["News Stand","Press","District","-",1,"-","Recruits in this district have -1 influence."],["The Examiner","Press","District","-","-","-","The highest-influence recruit in this district has 0 influence."],["The Moon","Press","District",2,"-","-","If there are no recruits with influence modifiers in this district, it provides no card draw."],["Personal Donation","Money","Event",0,"When you play this card or use it to pay a cost, gain 2 card tokens."],["Monopoly","Money","Event",0,"-","-","Until your next action phase, players cannot draw cards."],["Give That Guy a Raise","Money","Event",1,"-","-","Give a recruit +3 influence and increase its wages by 1."],["Good Work, Team","Money","Event","X","-","-","Choose a district. X is the number of recruits in that district. Each recruit in that district gains 2 influence."],["Windfall","Money","Event",0,"-","-","Gain money equal to 2x one of your recruits' wages."],["Melissa Vasquez","Money","Recruit",2,0,0,"Inflation 2"],["Harriet Johns","Money","Recruit",2,0,0,"Before your wages phase, gain $2 if your opponent didn't play a recruit in this district last turn."],["Fred Sandburg","Money","Recruit",3,0,1,"Before your wages phase, gain $1 for each recruit in this district (including Mr. Sandburg)."],["Millie Baumgarten","Money","Recruit",4,0,4,"Inflation 0"],["Pete McKelley","Money","Recruit",3,1,1,"When you play Mr. McKelley, place $9 from the bank on him. Whenever you play a recruit in this district, take $3 from Mr. McKelley."],["Barbara O'Brien","Money","Recruit",2,3,0,"Ms. O'Brien's influence is increased by 1 for every $5 in your funds (rounded down)."],["Sean Erickson","Money","Recruit",2,3,3,"After you've run through your deck once, Mr. Erickson's wages are decreased by $3."],["Jeana Strauss","Money","Recruit",3,3,5,"Inflation 1"],["Diana McVeigh","Money","Recruit",2,0,0,"Whenever you play an Event, lose $1, and Mrs. McVeigh gains 1 influence."],["Archie Stearns","Money","Recruit",2,1,1,"When you play Mr. Stearns, give another recruit in this district +1 influence."],["Turnover","Money","Resource",1,"-","-","Whenever a recruit is discarded from play, gain $1."],["Employee Administration","Money","Resource",2,"-","-","$2, @: Give a recruit +1 influence."],["Loopholes","Money","Resource",1,"-","-","Put 3 counters on this card when it enters play. At the beginning of your turn, remove a counter from it. While there are counters on this card, players draw can only draw one card per turn."],["Employment Center","Money","District","-",1,"-","Gain $1 whenever a recruit is discarded from this district."],["Investment Bank","Money","District","-",1,"-","At the end of your income phase, if at least 4 of your districts produced income, gain $1."],["Real Estate Corporation","Money","District","-",0,"-","When a recruit is played or moved into this district it gets +$1. After your income phase, it gets -$1 (minimum 0)."],["Crowdsourced Donation","People","Event",0,"-","-","When you play this card or use it to pay a cost, discard the top two cards of your deck."],["Door-to-Door","People","Event",0,"-","-","Draw 4 cards, then discard 2 cards."],["Take Our City Back","People","Event",2,"-","-","Play only if you have at least one recruit in each district. Give a recruit +4 influence."],["Pound the Pavement","People","Event",2,"-","-","Gain @@."],["Campus Trip","People","Event",3,"-","-","Recruit 2 1/0 token recruits in the same district."],["We're Everywhere","People","Event",5,"-","-","Recruit a 1/1 token recruit in every district."],["Volunteer Hours","People","Event",2,"-","-","Spend all your money. Until after your next wages phase, all of your recruits' wages are reduced to 0."],["Dean Erickson","People","Recruit",2,0,3,"After you've run through your deck once, Mr. Erickson's wages are increased by $2."],["College Student","People","Recruit",0,1,1,"Non-unique. Limit 4 per deck."],["Oliver Peters","People","Recruit",1,1,0,"If Andrew Peters is in the same district, +2 influence."],["Andrew Peters","People","Recruit",1,1,1,"If Oliver Peters is in the same district, draw 1 card at the end of your turn."],["Tony Stevens","People","Recruit",2,1,0,"Give Mr. Stevens +1 influence for each recruit played on the same turn as him."],["Sergio Rodriguez","People","Recruit",2,1,3,"If Mr. Rodriguez is ever your only recruit in a district, discard him."],["Armando Estevez","People","Recruit",5,2,2,"When you play Mr. Estevez, recruit 2 1/0 recruits in this district."],["Reverend Samuel Parker","People","Recruit",2,8,5,"The first time you would pay Rev. Parker's wages, the cost is 0."],["Sierra Berg","People","Recruit",3,2,2,"At the beginning of your turn, draw a card, then discard a card at random."],["Amelia Andrus","People","Recruit",1,1,0,"When you shuffle your discard pile into your deck, you may swap Ms. Andrus with one of the recruits in your discard pile."],["By the People","People","Resource",2,"-","-","The play costs of ALL recruits are reduced by 1."],["For the People","People","Resource",3,"-","-","ALL recruits have +1 influence."],["Grassroots Funding","People","Resource",4,"-","-","When your turn begins, gain $1 for each district in which you have at least one recruit."],["Community Pool","People","District","-",0,"-","+$1 for each district in which you have more recruits than your opponent."],["Project Housing","People","District","-","-","-","Whenever you play or move a recruit into this district, recruit a 1/1 token recruit in this district."],["Coffee House","People","District","-",1,"-","Discard the top card of your deck at the beginning of your turn."],["Town Square","People","District","-","-","-","All recruits in this district have 2 influence. Other influence modifiers have no effect in this district."],["Fundraiser","Neutral","Event",2,"-","-","Gain $5."],["Gala","Neutral","Event",4,"-","-","Gain $9."],["Anonymous Donation","Neutral","Event",0,"-","-","When you play this card or use it to pay a cost, draw a card."],["Donor Support","Neutral","Event",1,"-","-","Gain 4 card tokens."],["Farmer","Neutral","Recruit",3,0,2,"Non-unique."],["Lawyer","Neutral","Recruit",7,0,4,"Non-unique."],["Plumber","Neutral","Recruit",1,1,1,"Non-unique."],["Electrician","Neutral","Recruit",0,2,1,"Non-unique."],["Grocer","Neutral","Recruit",2,2,3,"Non-unique."],["Teacher","Neutral","Recruit",3,3,4,"Non-unique."],["Professor","Neutral","Recruit",1,4,3,"Non-unique."],["Doctor","Neutral","Recruit",0,8,4,"Non-unique."],["Raul Anguilar","Neutral","Recruit",4,2,2,"When played, draw 3 cards."],["Virginia Perry","Neutral","Recruit",2,1,4,"When you pay Ms. Perry's wages, discard a random card from your hand."],["Agnes Flores","Neutral","Recruit",4,4,1,"Also influences adjacent districts."],["Chuck Turner","Neutral","Recruit",2,7,3,"After paying wages, gain $7."],["Max Sandoval","Neutral","Recruit",2,3,2,"When you pay Mr. Sandoval's wages, draw a card."],["Martin Lovan","Neutral","Recruit",3,2,2,"When played, gain $4."],["Abe Stansbury","Neutral","Recruit",3,1,1,"When you play Mr. Stansbury, set a friendly recruit's influence to equal its wages."],["All-In Campaign","Neutral","Resource",0,"-","-","@@, trash this card: Gain $10."],["Ad Campaign","Neutral","Resource",2,"-","-","Gain $1 when your turn begins."],["Strip Mall","Neutral","District","-",1,"-","Non-unique."],["Public Library","Neutral","District",1,"-","-","Non-unique."],["Public School","Neutral","District",2,"-","-","Non-unique. If you are losing in this district, this card provides no card draw."],["Shopping Center","Neutral","District","-",2,"-","Non-unique. If you are losing in this district, this card provides no income."],["Waste Management","Neutral","District",2,"-","-","Non-unique. If you are winning in this district, this card provides no card draw."]];

class App extends Component {
    constructor(props) {
        super(props);
        this.cards = App.createCards(card_column_data);
    }

    cards = [];

    static createCards = function (card_list) {
        console.log("CARD LIST", card_list);
        return card_list.map((card_data, i) => {
            console.log("INDIVIDUAL CARD DATA", card_data);
            return (
                <Card template={card_template_data} card_data={card_data} key={i}/>
            )
        })
    };

    static retrieveNestedBindings = function(base){
        let returnedBindings = base.bindings;
        if (base.hasOwnProperty("flags")){
            let childBindings = flatten(
                base.flags.map(
                    App.retrieveNestedBindings
                )
            );
            returnedBindings = returnedBindings.concat(childBindings);
        }
        return returnedBindings;
    };

    render() {
        let all_bindings = App.retrieveNestedBindings(card_template_data);
        return (
            <div className="App">
                <TemplateStyle template={card_template_data}/>
                <BindingStyles bindings={all_bindings}/>
                {this.cards}
            </div>
        );
    }
}

export default App;
