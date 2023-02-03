import './style/App.css';
import Heroe from './components/Heroe';

const heroes =
[{
image: "images/batman.jpg",
name: "Бэтмен",
universe: "DC Comics",
alterego: "Брюс Уэйн",
occupation: "борец с преступностью, филантроп, миллиардер",
characteristics: "интеллект, ловкость",
friends: "Робин, Бэтгерл"
},
{
image: "images/superman.jpg",
name: "Супермен",
universe: "DC Comics",
alterego: "Кларк Кент",
occupation: "борец за справедливость",
characteristics: "непробиваемость, суперсила, полет, самоисцеление, суперзрение, суперслух",
friends: "собака Крипто"
},
{
image: "images/ironman.jpg",
name: "Железный человек",
universe: "Marvel Comics",
alterego: "Тони Старк",
occupation: "гений, филантроп,миллиардер, плейбой",
characteristics: "интеллект, обширные познания науки и техники, связь со всемирной поутиной, бронекостюмы",
friends: "Мстители"
},
{
image: "images/spiderman.jpg",
name: "Человек-паук",
universe: "DC Comics",
alterego: "Питер Паркер",
occupation: "борец за справедливость, студент, фотограф",
characteristics: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
friends: "Мстители, Фантастическая четверка, Люди Икс"
}
];

export default function App() {
  return (
    <div className="App">
 {
    heroes.map(heroe => (
      <Heroe name={heroe.name} image={heroe.image} universe={heroe.universe} alterego={heroe.alterego} occupation={heroe.occupation} characteristics={heroe.characteristics}></Heroe>
    ))
 }
    </div>
)
}