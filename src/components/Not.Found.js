import React from 'react'

import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <div>
         <section>
            <div>
               <h1>404</h1>
               <h2>PAGE NOT FOUND</h2>
               <Link to="/">
                  <h3>BACK TO HOME</h3>
               </Link>
            </div>
         </section>
      </div>
   )
}

export default NotFound

// const StyledDiv = styled.div`
//    & {
//       background-color: #000000;
//    }

//    & section {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       margin: 0 5%;
//       height: 100vh;
//    }
// `
// const DivText = styled.div`
//    & {
//       height: 50vh;
//       & h1 {
//          color: red;
//          font-size: 100px;
//          margin-bottom: 40px;
//          font-family: 'Press Start 2P';
//       }
//       & h2 {
//          font-size: 50px;
//          margin-bottom: 40px;
//          font-family: 'Press Start 2P';
//          color: #fff;
//       }
//       & h3 {
//          margin-bottom: 40px;
//          height: 50vh;
//          font-family: 'Press Start 2P';
//       }
//    }
// `

// const StyledLink = styled(Link)`
//    & {
//       text-decoration: none;
//       margin-right: 20px;
//       color: #fff;
//    }

//    &:hover {
//       color: red;
//       text-decoration: underline;
//    }
// `
