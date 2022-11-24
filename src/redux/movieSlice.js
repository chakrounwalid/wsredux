import {createSlice} from '@reduxjs/toolkit'


export const movieSlice = createSlice({
    name :'movies',
    initialState :[
        {
            title :"Top Gun: Maverick",
            description :"After thirty years, Maverick is still pushing the envelope as a top naval aviator",
            posterURL :'https://fr.web.img3.acsta.net/pictures/22/03/29/15/12/0827894.jpg',
            rating : 5,
            id :1
          },
          {
            title :'Jurassic World Dominion' ,
            description :'Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood',
            posterURL :'https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
            rating : 3,
            id :2
          },
          {
            title :'Minions: The Rise of Gru',
            description :'The untold story of one twelve-year-olds dream to become the worlds greatest supervillain.',
            posterURL :'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg',
            rating : 4,
            id :3
          },
          {
            title :'The Batman',
            description :'When a sadistic serial killer begins murdering key political figures in Gotham',
            posterURL :'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
            rating : 4,
            id :4
          }
    ] ,
    reducers :{
      addMovie : (state,action) =>{
        state.push(action.payload)
      },
      delMovie : (state,action ) =>{
        console.log(action);
        return state.filter((movie)=>movie.id !== action.payload);
        
      },
      editMovie : (state,action) =>{
        return state.map((elm)=>elm.id === action.payload.id ?
          {...elm,
            title : action.payload.edMovie.title,
            description : action.payload.edMovie.description,
            posterURL : action.payload.edMovie.posterURL,
            rating : action.payload.edMovie.rating
          }:elm
        )
      }
    }
})
export const {addMovie,delMovie,editMovie} = movieSlice.actions

export default movieSlice.reducer