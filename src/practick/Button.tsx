

export const Button = () => {
    const myFirstSubscriber = (
        //{event:MouseEvent<HTMLButtonElement>}
    ) => {
        console.log('Hello Im VASAY!')
    }
    const mySecondSubscriber = () => {
        console.log('Hello Im IVAN!')
    }
  return (
    <div>
        {/* <button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel</button> */}
        <button onClick={myFirstSubscriber}>MyYouTubeChane1</button>
        <button onClick={mySecondSubscriber}>MyYouTubeChane2</button>
    </div>
  )
}
