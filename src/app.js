import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import ContactUs from './home/ContactUs'
import ReviewMessage from './home/ReviewMessage'


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