import React, { Component } from 'react';

import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  toggleChecked() {
    // update function takes two arguments:
    // 1) selector that identifies a subset of the Collection
    // 2) update parameter that specifies what should be done to the matched objects
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }
  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }
  render() {
    const taskClassName = this.props.task.checked ? 'checked' : '';
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisSTask.bind(this)}>
          &times;
        </button>
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}
