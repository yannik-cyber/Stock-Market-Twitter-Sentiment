import React, { Component } from "react";
import { Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Notes from './note'

export default class Idea1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }
  render() {

    let notes = this.state.noteArray.map((val, key) => {
        return <Notes key={key} keyval={key} val={val} deleteMethod={ ()=> this.deleteNote(key)} />
    });

    return (
      <View>
        <ScrollView>
            {notes}
        </ScrollView>
        <View>
          <TextInput placeholder="test" onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}></TextInput>
        </View>
        <TouchableOpacity onPress={ this.addNote.bind(this) }>
            <Text>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote(){
    if(this.state.noteText){
        var d = new Date();
        this.state.noteArray.push({
            'date': d.getFullYear(),
            'note': this.state.noteText
        });
        this.setState({ noteArray: this.state.noteArray })
        this.setState({ noteText: ''})
    }
  }

  deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }

}
