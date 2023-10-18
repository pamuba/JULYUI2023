// export function Greet(){
//     return  <h1>Hello {props.name} akz {props.heroName}</h1>

// }


const  Greet = (props) => {
                            return <div>
                                <h1>Hello {props.name} akz {props.heroName}</h1>
                                {props.children}
                            </div>
                          }

export default Greet