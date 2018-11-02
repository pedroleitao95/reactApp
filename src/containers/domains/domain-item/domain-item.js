import React, { Component } from 'react';
import './domain-item.scss';


import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  });

class DomainItem extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        expanded: null,
      };

      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
    

    // render(){
    //     return <li className="list-group-item list-group-item-action">Url : {this.props.domain.url}</li>

    // };


    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
    
        return (
            <ExpansionPanel expanded={expanded === `${this.props.domain.id}`} onChange={this.handleChange(`${this.props.domain.id}`)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{this.props.domain.url}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {this.props.domain.id} : {this.props.domain.url}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        );
      }

}

export default withStyles(styles)(DomainItem);