import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'jstree/dist/jstree.min';
import 'jstree/dist/themes/default/style.css';

class TreeView extends Component {

  static propTypes = {
    treeData: PropTypes.object.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => false,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.treeData !== this.props.treeData;
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this))
      .on('changed.jstree', (e, data) => {
        if (this.props.onChanged) {
          this.props.onChanged(data.selected.map(
            item => data.instance.get_node(item)
          ));
        }
      }).jstree(treeData);
  }

  render() {
    return (<div></div>);
  }
}

export default TreeView;
