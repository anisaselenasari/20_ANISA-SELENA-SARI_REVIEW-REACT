import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import ContactUs from './Home/ContactUs'
import ReviewMessage from './Home/ReviewMessage'


function App() {
  return (
    <Switch>
      <Route exact path="/ReviewMessage" component={ReviewMessage} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/" component={Home} />
      <Route />
    </Switch>
  )
}

export default App