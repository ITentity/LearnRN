/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 const React = require('react');
 const ReactNative = require('react-native');
 const {
   AppState,
   Text,
   View,
 } = ReactNative;

 export default class AppStateSubscription extends React.Component {
   state = {
     appState: AppState.currentState,
     previousAppStates: [],
     memoryWarnings: 0,
   };

   componentDidMount() {
     AppState.addEventListener('change', this._handleAppStateChange);
     AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
   }

   componentWillUnmount() {
     AppState.removeEventListener('change', this._handleAppStateChange);
     AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
   }

   _handleMemoryWarning = () => {
     this.setState({ memoryWarnings: this.state.memoryWarnings + 1 });
   };

   _handleAppStateChange = (appState) => {
     const previousAppStates = this.state.previousAppStates.slice();
     previousAppStates.push(this.state.appState);
     this.setState({
       appState,
       previousAppStates,
     });
   };

   render() {
     return (
       <View style={{ marginTop: 50 }}>
         <Text>zhaozx1{this.state.memoryWarnings}</Text>
         <Text>zhaozx2{this.state.appState}</Text>
         <Text>zhaozx3{JSON.stringify(this.state.previousAppStates)}</Text>
       </View>
     );
    //  if (this.props.showMemoryWarnings) {
    //    return (
    //      <View style={{marginTop: 50}}>
    //        <Text>zhaozx1{this.state.memoryWarnings}</Text>
    //      </View>
    //    );
    //  }
    //  if (this.props.showCurrentOnly) {
    //    return (
    //      <View style={{marginTop: 100}}>
    //        <Text>zhaozx2{this.state.appState}</Text>
    //      </View>
    //    );
    //  }
    //  return (
    //    <View style={{marginTop: 150}}>
    //      <Text>zhaozx3{JSON.stringify(this.state.previousAppStates)}</Text>
    //    </View>
    //  );
   }
 }

 exports.title = 'AppState';
 exports.description = 'app background status';
 exports.examples = [
   {
     title: 'AppState.currentState',
     description: 'Can be null on app initialization',
     render() { return <Text>{AppState.currentState}</Text>; },
   },
   {
     title: 'Subscribed AppState:',
     description: 'This changes according to the current state, so you can only ever see it rendered as "active"',
     render(): React.Element<any> { return <AppStateSubscription showCurrentOnly={true} />; },
   },
   {
     title: 'Previous states:',
     render(): React.Element<any> { return <AppStateSubscription showCurrentOnly={true} />; },
   },
   {
     platform: 'ios',
     title: 'Memory Warnings',
     description: 'In the IOS simulator, hit Shift+Command+M to simulate a memory warning.',
     render(): React.Element<any> { return <AppStateSubscription showMemoryWarnings={true} />; },
   },
 ];
