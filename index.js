const Button = props => {
  {className,buttonText}=props;
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Social Buttons</h1>
        <div>
            <Button buttonText="Like" className="like-button"/>
            <Button buttonText="Comment" className="Comment-button"/>
            <Button buttonText="Share" className="Share-button"/>
        </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
