import { connect } from 'react-redux'
import App from '../containers/App/App.jsx'

const AppConnected = connect(
    (state) => {
        return {
            messages: state.messages,
            members: state.members
        }
    }
)(App);

export default AppConnected
