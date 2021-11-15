import './App.css';
import someData from './news.json'
// import React, {Component} from 'react';


function App(){
    // const data = JSON.parse(someData)
    // console.log(data)
    console.log(someData)
  return(
      <div className='hi'>
        {someData.map((item) => (
        <div key={item.id}>
            <h1>{item.title}</h1>
            <h2 dangerouslySetInnerHTML={{__html: item.content}}/>
            <div>{item.isSpecial ? "Special" : ""}</div>
            <date>{item.dateCreated.slice(0, 19)}</date>
            <div>{item.categories.map((cat) => (
                <div key={cat.id}>
                    {/*<div>{cat.id}</div>*/}
                    <p>{cat.name}</p>
                </div>
            ))}</div>
            {item.link && <a href={item.link}>{item.link}</a>}
            {item.photo && <img src={item.photo + item.id}/>}
            {item.author && <h4>{item.author}</h4>}
        </div>
        ))};
      </div>
  )
}
// function App() {
//   return (
//       {someDate.map(some => (
//           <div key={'id'}>
//             <title key={'title'}>{'title'}</title>
//             <div key={'content'}></div>
//           </div>
//         ))}
//   );
// }
// function App() {
//   const reptiles = ['alligator', 'snake', 'lizard'];
//
//   return (
//       <ol>
//         {reptiles.map(reptile => (
//             <li key={reptile}>{reptile}</li>
//         ))}
//       </ol>
//   );
// }
export default App;
