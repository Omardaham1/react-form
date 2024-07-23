import Authenticate from "./Authenticate.jsx";
import SignUpForm from "./SignUpform.jsx";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
            
      <SignUpForm setToken={setToken} />
            
      <Authenticate token={token} />
          
    </>
  );
}


export default App; 


